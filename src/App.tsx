import { useState } from 'react';
import { 
  Code, 
  Palette, 
  Cloud, 
  Database, 
  Briefcase, 
  BrainCircuit, 
  MessageSquare, 
  TestTube, 
  Server, 
  Activity,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Search,
  Menu,
  X
} from 'lucide-react';

// Data from the markdown
const categories = [
  { id: 'dev', name: 'Development & Coding', icon: Code },
  { id: 'design', name: 'Design & UI/UX', icon: Palette },
  { id: 'cloud', name: 'Cloud & Deployment', icon: Cloud },
  { id: 'db', name: 'Database & Backend', icon: Database },
  { id: 'pm', name: 'Project Management', icon: Briefcase },
  { id: 'ml', name: 'Data Science & ML', icon: BrainCircuit },
  { id: 'comm', name: 'Communication', icon: MessageSquare },
  { id: 'test', name: 'API & Testing', icon: TestTube },
  { id: 'devops', name: 'DevOps & CI/CD', icon: Server },
  { id: 'monitor', name: 'Monitoring', icon: Activity },
];

const tools = [
  // Development
  { id: 1, name: 'GitHub Copilot', category: 'dev', cost: 'FREE', link: 'https://education.github.com/', desc: 'AI pair programmer', highlight: 'Suggests code in real-time' },
  { id: 2, name: 'JetBrains IDEs', category: 'dev', cost: 'FREE (1 year)', link: 'https://www.jetbrains.com/shop/eform/students', desc: 'Professional code editors', highlight: 'IntelliJ, PyCharm, WebStorm, etc.' },
  { id: 3, name: 'VS Code', category: 'dev', cost: 'FREE', link: 'https://code.visualstudio.com/', desc: 'Lightweight code editor', highlight: 'Open source, unlimited' },
  { id: 4, name: 'GitHub Pro', category: 'dev', cost: 'FREE', link: 'https://education.github.com/', desc: 'Version control + features', highlight: 'Unlimited private repos' },
  
  // Design
  { id: 5, name: 'Figma', category: 'design', cost: 'FREE Pro Plan', link: 'https://www.figma.com/education/apply', desc: 'Design & prototyping', highlight: 'Verify as student, unlimited files' },
  { id: 6, name: 'FigJam', category: 'design', cost: 'FREE', link: 'https://www.figma.com/education/apply', desc: 'Online whiteboard', highlight: 'Brainstorming & collaboration' },
  { id: 7, name: 'Penpot', category: 'design', cost: 'FREE & OSS', link: 'https://penpot.app/', desc: 'Open-source design', highlight: 'No verification needed' },
  
  // Cloud
  { id: 8, name: 'Vercel', category: 'cloud', cost: 'FREE tier', link: 'https://vercel.com/', desc: 'Deploy Next.js & web apps', highlight: 'GitHub auto-deploy, global CDN' },
  { id: 9, name: 'Netlify', category: 'cloud', cost: 'FREE tier', link: 'https://netlify.com/', desc: 'Deploy static & serverless', highlight: 'Generous free tier for projects' },
  { id: 10, name: 'AWS Educate', category: 'cloud', cost: '$100 credits/yr', link: 'https://aws.amazon.com/education/', desc: 'Cloud learning program', highlight: 'EC2, S3, RDS, Lambda' },
  
  // Database
  { id: 11, name: 'Supabase', category: 'db', cost: 'FREE tier + credits', link: 'https://supabase.com/', desc: 'PostgreSQL backend', highlight: 'Auth, APIs, real-time, storage' },
  { id: 12, name: 'Firebase', category: 'db', cost: 'FREE tier + $300', link: 'https://firebase.google.com/', desc: 'Google\'s backend', highlight: 'Firestore, Auth, Hosting' },
  { id: 13, name: 'MongoDB Atlas', category: 'db', cost: 'FREE tier (512MB)', link: 'https://www.mongodb.com/atlas', desc: 'NoSQL database', highlight: 'Auto-scaling, backups' },
  
  // PM
  { id: 14, name: 'Linear', category: 'pm', cost: 'FREE tier', link: 'https://linear.app/', desc: 'Issue tracking', highlight: 'Speed-focused for tech teams' },
  { id: 15, name: 'Notion', category: 'pm', cost: 'FREE for students', link: 'https://www.notion.so/students', desc: 'Note-taking + docs', highlight: 'All-in-one workspace' },
  
  // ML
  { id: 16, name: 'Streamlit', category: 'ml', cost: 'FREE & OSS', link: 'https://streamlit.io/', desc: 'Build data apps', highlight: 'Python to web app in minutes' },
  { id: 17, name: 'Hugging Face', category: 'ml', cost: 'FREE tier + GPU', link: 'https://huggingface.co/', desc: 'ML models & hub', highlight: '2M+ models, collaboration' },
  { id: 18, name: 'Google Colab', category: 'ml', cost: 'FREE (GPU access)', link: 'https://colab.research.google.com/', desc: 'Jupyter + GPU', highlight: '15GB storage, GPU/TPU' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">VTC Benefits</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#guide" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Guide</a>
              <a href="#tools" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tools Directory</a>
              <a href="#bundles" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tech Stacks</a>
              <a 
                href="https://education.github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                Get GitHub Pack <ExternalLink size={16} />
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
          <a href="#guide" className="block text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Guide</a>
          <a href="#tools" className="block text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Tools Directory</a>
          <a href="#bundles" className="block text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Tech Stacks</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            $10,000+ in Free Software for <span className="text-blue-300">VTC Students</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            The ultimate guide to free and discounted professional tools for Hong Kong Vocational Training Council students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tools" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg transition-colors shadow-lg">
              Browse Tools
            </a>
            <a href="#checklist" className="bg-blue-700 hover:bg-blue-600 border border-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Quick Start Guide
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top 5 Must-Haves */}
        <section id="guide" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="text-yellow-500">⭐</span> Top 5 Must-Haves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'GitHub Student Pack', desc: 'Unlocks 50+ tools including Copilot Pro automatically.', link: 'https://education.github.com/' },
              { title: 'JetBrains License', desc: 'All professional IDEs (IntelliJ, PyCharm) free for 1 year.', link: 'https://www.jetbrains.com/shop/eform/students' },
              { title: 'Figma Education', desc: 'Professional design tools for all students.', link: 'https://www.figma.com/education/apply' },
              { title: 'Vercel + Netlify', desc: 'Free hosting for web apps (no credit card needed).', link: 'https://vercel.com/' },
              { title: 'AWS Educate', desc: '$100 credits/year for cloud learning and deployment.', link: 'https://aws.amazon.com/education/' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
                  Get it now <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Directory */}
        <section id="tools" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Tools Directory</h2>
              <p className="text-slate-600">Browse 70+ free tools available to VTC students.</p>
            </div>
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search tools..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-2 hide-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Tools
            </button>
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeCategory === cat.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={16} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map(tool => (
                <div key={tool.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {tool.cost}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-1">{tool.desc}</p>
                    <p className="text-sm text-slate-500">{tool.highlight}</p>
                  </div>
                  <div className="bg-slate-50 px-6 py-3 border-t border-slate-100">
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Get Access <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500 text-lg">No tools found matching your search.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Tech Stacks */}
        <section id="bundles" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ultimate Student Bundles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stack 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Web Development</h3>
                <p className="text-blue-100 text-sm">Modern full-stack React apps</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Frontend:</span> React + Vercel</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Backend:</span> Node.js + Supabase</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Database:</span> PostgreSQL (Supabase)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Design:</span> Figma</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">IDE:</span> VS Code + GitHub Copilot</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stack 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Data Science & ML</h3>
                <p className="text-indigo-100 text-sm">Python, models, and data apps</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">IDE:</span> PyCharm (JetBrains)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Notebooks:</span> Google Colab</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Database:</span> MongoDB Atlas</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Deployment:</span> Streamlit Cloud</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">ML Models:</span> Hugging Face</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stack 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-800 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Full-Stack SaaS</h3>
                <p className="text-slate-300 text-sm">Production-ready architecture</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Frontend:</span> Next.js + Vercel</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Backend:</span> Python FastAPI + Railway</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Database:</span> PostgreSQL (Neon)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">Auth:</span> Supabase Auth</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div><span className="font-semibold text-slate-900">CI/CD:</span> GitHub Actions</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Checklist */}
        <section id="checklist" className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">⚡ Quick Start Checklist</h2>
            <p className="text-slate-600 text-center mb-10">Follow these steps to claim your benefits today.</p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Week 1: The Essentials
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <span className="text-slate-700">Register for <strong>GitHub Student Developer Pack</strong> (gets you Copilot Pro)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <span className="text-slate-700">Apply for <strong>JetBrains Student License</strong> (all IDEs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <span className="text-slate-700">Verify <strong>Figma Education</strong> account</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Week 2: Cloud & Databases
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <span className="text-slate-700">Enroll in <strong>AWS Educate</strong> ($100 credits)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <span className="text-slate-700">Create <strong>Supabase</strong> and <strong>Vercel</strong> accounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-blue-400" />
            <span className="font-bold text-xl text-white">VTC Benefits Guide</span>
          </div>
          <p className="mb-6 max-w-2xl mx-auto">
            Compiled for Hong Kong Vocational Training Council students. 
            Information accurate as of February 2026. Tool availability and pricing subject to change.
          </p>
          <p className="text-sm">
            Built with React, Tailwind CSS, and Vite. Deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
