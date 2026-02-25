# Strategic Marketing in the AI Age

[![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=for-the-badge&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)](https://dmccreary.github.io/intelligent-textbooks/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=white)](https://p5js.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

> Strategic marketing principles and tactics powered by artificial intelligence, data, and automation. This resource provides a framework for modern marketers navigating the AI revolution.

## 🌐 Website

**[View the Live Site →](https://dmccreary.github.io/intelligent-textbooks/)**

## 📖 About

This project is a series of resources to help teachers worldwide create the foundation for **free and open intelligent textbooks**. Our focus is on helping instructors create Level 2 textbooks that use a [learning graph](https://dmccreary.github.io/intelligent-textbooks/glossary/#learning-graph) as their core data structure to ground content generation and guide learning agents.

### Why Intelligent Textbooks?

Traditional textbooks are static. Intelligent textbooks adapt to learners, provide interactive experiences, and leverage AI to create personalized educational content. This project demonstrates how to build textbooks that:

- **Adapt to individual learning paths** using concept dependency graphs
- **Provide interactive simulations** (MicroSims) for hands-on learning  
- **Generate content dynamically** using AI prompts and workflows
- **Scale globally** using free, open-source tools

## 🏗️ Architecture

### Core Technologies

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator optimized for documentation
- **[Material Theme](https://squidfunk.github.io/mkdocs-material/)** - Modern, responsive theme with advanced features
- **[p5.js](https://p5js.org/)** - Interactive simulations and visualizations
- **[Python](https://www.python.org/)** - Content processing and analytics scripts
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for public educational content

### Key Components

| Component | Description |
|-----------|-------------|
| **MicroSims** | Interactive p5.js simulations embedded via iframes |
| **Learning Graphs** | Concept dependency visualizations and data |
| **AI Prompts** | Structured prompts for content generation workflows |
| **Custom Plugins** | Social media card overrides and extensions |
| **Analytics Tools** | Python scripts for site metrics and content analysis |

## 📁 Project Structure

```
intelligent-textbooks/
├── docs/                     # All markdown content
│   ├── concepts/            # Educational theory and best practices
│   ├── tutorial/            # Getting started guides
│   ├── prompts/             # AI content generation prompts
│   ├── workflow/            # Step-by-step content creation processes
│   ├── sims/                # Interactive p5.js microsimulations
│   │   ├── learning-graph/  # Concept dependency visualizations
│   │   ├── blooms-taxonomy/ # Educational taxonomy simulations
│   │   └── templates/       # Reusable MicroSim templates
│   └── css/extra.css        # Custom styling
├── src/                     # Python utility scripts
│   ├── site-analytics/      # Website metrics and reporting
│   ├── csv-to-json/         # Data format conversion tools
│   └── mk-book-toc/         # Table of contents generation
├── plugins/                 # Custom MkDocs plugins
│   └── social_override.py   # Social media card customization
├── mkdocs.yml              # Site configuration
└── CLAUDE.md               # AI development guidance
```

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- [Conda](https://docs.conda.io/en/latest/) (recommended) or pip
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dmccreary/intelligent-textbooks.git
   cd intelligent-textbooks
   ```

2. **Set up Python environment**
   ```bash
   # Using conda (recommended)
   conda create -n mkdocs python=3
   conda activate mkdocs
   
   # Install dependencies
   pip install mkdocs "mkdocs-material[imaging]"
   ```

3. **For social card generation (macOS)**
   ```bash
   brew install cairo freetype libffi libjpeg libpng zlib
   export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
   ```

### Development

```bash
# Build the site
mkdocs build

# Run local development server
mkdocs serve
# Visit http://localhost:8000

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## 📚 Content Areas

### 🎓 Educational Concepts
- **Five Levels of Intelligent Textbooks** - Progressive enhancement framework
- **Bloom's Taxonomy** - Cognitive learning objectives
- **Learning Graphs** - Concept dependency mapping
- **Scaffolding** - Structured learning support

### 🤖 AI Workflows  
- **Content Generation Prompts** - Structured AI interactions
- **Learning Graph Creation** - Automated concept mapping
- **Quality Assessment** - Content evaluation metrics
- **Semantic Search** - Intelligent content discovery

### 🎮 Interactive Elements
- **MicroSims** - p5.js educational simulations
- **Concept Visualizations** - Interactive diagrams
- **Learning Graph Viewer** - Dynamic concept exploration
- **Template Library** - Reusable simulation components

## 🛠️ Creating MicroSims

MicroSims are self-contained interactive educational simulations. Each follows this structure:

```
docs/sims/your-sim-name/
├── index.md          # Documentation and embedding
├── main.html         # Standalone HTML page  
└── your-sim-name.js  # p5.js simulation code
```

**Template Usage:** Start with `docs/sims/templates/` for consistent structure and styling.

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow existing MicroSim structure for interactive content
- Update navigation in `mkdocs.yml` for new pages
- Test locally with `mkdocs serve` before submitting
- Include appropriate metadata for social sharing

## 📊 Analytics & Metrics

The `src/site-analytics/` directory contains Python tools for:

- **Site Performance Metrics** - Page views, engagement analysis
- **Content Quality Assessment** - Educational effectiveness measures  
- **Learning Graph Analysis** - Concept coverage and dependencies
- **Report Generation** - Automated insights and recommendations

## 🎯 Educational Philosophy

This project implements concepts from Neal Stephenson's "The Diamond Age," specifically the **Young Lady's Illustrated Primer** - a vision of adaptive, personalized educational technology that:

- Generates content in real-time based on learner needs
- Uses interactive storytelling and simulations  
- Implements learning graphs for optimal concept sequencing
- Provides scaffolded support that adapts to individual progress

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/) - see the [LICENSE](docs/license.md) file for details.

**You are free to:**
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

**Under the following terms:**
- **Attribution** — You must give appropriate credit and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes  
- **ShareAlike** — If you remix or build upon the material, you must distribute your contributions under the same license

## 🔗 Links & Resources

- **📖 [Documentation](https://dmccreary.github.io/intelligent-textbooks/)**
- **🐛 [Issues](https://github.com/dmccreary/intelligent-textbooks/issues)**
- **💬 [Discussions](https://github.com/dmccreary/intelligent-textbooks/discussions)**
- **📧 [Contact](https://dmccreary.github.io/intelligent-textbooks/contact/)**

---

<div align="center">

**Built with ❤️ for educators worldwide**

*Empowering teachers to create intelligent, adaptive learning experiences*

</div>