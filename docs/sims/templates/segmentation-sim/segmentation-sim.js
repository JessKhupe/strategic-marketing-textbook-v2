// Minimal segmentation sim: loads CSV, computes simple segments and metrics
(function(){
  async function loadCSV(path){
    const raw = await fetch(path);
    const text = await raw.text();
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(l=>{
      const cols = l.split(',');
      const obj = {};
      headers.forEach((h,i)=> obj[h]=cols[i]);
      // coercions
      obj.id = obj.id;
      obj.age = Number(obj.age);
      obj.transactions = Number(obj.transactions);
      obj.recency_days = Number(obj.recency_days);
      obj.pages_viewed = Number(obj.pages_viewed);
      obj.predicted_clv = Number(obj.predicted_clv);
      obj.churn_prob = Number(obj.churn_prob);
      return obj;
    });
  }

  function bucketAge(a){
    if(a<35) return '18-34';
    if(a<55) return '35-54';
    return '55+';
  }

  function demographicSegments(data, key){
    const groups = {};
    data.forEach(d=>{
      const k = key==='age_group'? bucketAge(d.age) : d.region;
      groups[k] = groups[k]||[]; groups[k].push(d);
    });
    return groups;
  }

  function behavioralSegments(data){
    const highEngaged = data.filter(d=> d.pages_viewed>=8 || d.transactions>=3);
    const medium = data.filter(d=> (d.pages_viewed>=4 && d.pages_viewed<8) || (d.transactions===1 || d.transactions===2));
    const low = data.filter(d=> d.pages_viewed<4 && d.transactions<1);
    return {High: highEngaged, Medium: medium, Low: low};
  }

  function aiSegments(data){
    const highCLV = data.filter(d=> d.predicted_clv>=200);
    const churnRisk = data.filter(d=> d.churn_prob>=0.5);
    const opportunity = data.filter(d=> d.predicted_clv>=100 && d.churn_prob<0.5);
    return {HighCLV: highCLV, ChurnRisk: churnRisk, Opportunity: opportunity};
  }

  function metricsForGroup(group){
    const reach = group.length;
    const avgCLV = reach? (group.reduce((s,d)=> s + d.predicted_clv,0)/reach).toFixed(2) : 0;
    const estCPA = reach? (Math.max(5, (200/Math.max(1,avgCLV))*10)).toFixed(2) : 0; // synthetic
    return {reach, avgCLV, estCPA};
  }

  function renderTable(groups){
    const wrap = document.getElementById('tableWrap');
    let html = '<table><thead><tr><th>Segment</th><th>Count</th><th>Avg predicted CLV</th><th>Est CPA</th></tr></thead><tbody>';
    for(const k of Object.keys(groups)){
      const m = metricsForGroup(groups[k]);
      html += `<tr><td>${k}</td><td>${m.reach}</td><td>${m.avgCLV}</td><td>${m.estCPA}</td></tr>`;
    }
    html += '</tbody></table>';
    wrap.innerHTML = html;
  }

  function renderMetrics(groups){
    const metrics = document.getElementById('metrics');
    const totals = Object.values(groups).reduce((acc,arr)=> acc + arr.length,0);
    metrics.innerHTML = `Segments: ${Object.keys(groups).length} · Total reach: ${totals}`;
  }

  function renderReport(groups, segType){
    const parts = [];
    parts.push(`Experiment: ${segType}`);
    for(const k of Object.keys(groups)){
      const m = metricsForGroup(groups[k]);
      parts.push(`- ${k}: ${m.reach} users · avgCLV=${m.avgCLV} · estCPA=${m.estCPA}`);
    }
    const rep = parts.join('\n');
    document.getElementById('report').textContent = rep;
  }

  function exportCSV(groups){
    const rows = ['segment,id,age,region,transactions,recency_days,pages_viewed,predicted_clv,churn_prob'];
    for(const seg of Object.keys(groups)){
      groups[seg].forEach(d=>{
        rows.push([seg,d.id,d.age,d.region,d.transactions,d.recency_days,d.pages_viewed,d.predicted_clv,d.churn_prob].join(','));
      });
    }
    const blob = new Blob([rows.join('\n')], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'segment-export.csv'; a.click(); URL.revokeObjectURL(url);
  }

  async function init(){
    const data = await loadCSV('data/customers.csv');
    document.getElementById('runBtn').addEventListener('click', ()=>{
      const segType = document.querySelector('input[name=seg]:checked').value;
      const segKey = document.getElementById('segmentKey').value;
      let groups = {};
      if(segType === 'demographic') groups = demographicSegments(data, segKey==='age_group'? 'age_group' : 'region');
      if(segType === 'behavioral') groups = behavioralSegments(data);
      if(segType === 'ai') groups = aiSegments(data);
      renderTable(groups); renderMetrics(groups); renderReport(groups, segType);
      window.lastGroups = groups;
    });

    document.getElementById('exportBtn').addEventListener('click', ()=>{
      if(window.lastGroups) exportCSV(window.lastGroups); else alert('Run an experiment first');
    });
  }

  init();
})();
