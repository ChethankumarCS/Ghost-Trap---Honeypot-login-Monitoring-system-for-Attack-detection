import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Target, 
  Zap, 
  Bell, 
  Globe, 
  Server, 
  MessageSquare, 
  Activity, 
  Lock, 
  Eye, 
  AlertTriangle,
  ChevronRight,
  Terminal,
  Cpu,
  Webhook,
  User,
  Key,
  ArrowLeft,
  Radiation
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

export default function App() {
  const [view, setView] = useState<'docs' | 'decoy'>('docs');
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [isAlerting, setIsAlerting] = useState(false);

  const architectureSteps = [
    {
      id: 1,
      title: "Decoy Frontend",
      description: "Fake admin login page hosted on GitHub Pages.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
      details: "Acts as a 'Ghost' entry point. It looks like a high-value target (Admin Panel) but contains no real data or access."
    },
    {
      id: 2,
      title: "API Gateway",
      description: "Secure entry point for the Lambda function.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-500",
      details: "Receives POST requests from the decoy page and triggers the backend processing."
    },
    {
      id: 3,
      title: "AWS Lambda",
      description: "Serverless compute for metadata extraction.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-orange-500",
      details: "Extracts IP address, User-Agent, and credentials. It processes data without managing servers."
    },
    {
      id: 4,
      title: "Discord Webhook",
      description: "Real-time alerting and notification.",
      icon: <Webhook className="w-6 h-6" />,
      color: "bg-indigo-500",
      details: "Instantly pushes the captured metadata to a private Discord channel for immediate response."
    }
  ];

  const runSimulation = (username?: string) => {
    setIsSimulating(true);
    setSimulationLogs([]);
    
    const steps = [
      "Attacker visits decoy-admin.github.io...",
      `Attacker enters username: '${username || 'admin'}' and password: '••••••••'`,
      "POST request sent to API Gateway...",
      "AWS Lambda triggered. Extracting metadata...",
      "Captured IP: 192.168.1.42",
      "Captured User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
      "Sending alert to Discord...",
      "✅ Alert Received in #security-alerts"
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setSimulationLogs(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setIsSimulating(false);
          triggerAlertSensation();
        }
      }, (index + 1) * 600);
    });
  };

  const triggerAlertSensation = () => {
    setIsAlerting(true);
    setTimeout(() => setIsAlerting(false), 3000);
  };

  const handleDecoyLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    runSimulation(username);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Alert Sensation Overlay */}
      <AnimatePresence>
        {isAlerting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          >
            <motion.div 
              animate={{ 
                backgroundColor: ["rgba(255,0,0,0)", "rgba(255,0,0,0.4)", "rgba(255,0,0,0)"],
              }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="absolute inset-0"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 bg-red-600 text-white px-12 py-8 rounded-2xl shadow-[0_0_100px_rgba(220,38,38,0.8)] border-4 border-white flex flex-col items-center gap-4"
            >
              <Radiation className="w-20 h-20 animate-spin-slow" />
              <h2 className="text-5xl font-black tracking-tighter uppercase italic">Intrusion Detected</h2>
              <p className="font-mono text-xl">METADATA CAPTURED • ALERT SENT</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {view === 'docs' ? (
        <>
          {/* Hero Section */}
          <header className="relative overflow-hidden pt-20 pb-32 px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">Cybersecurity Project</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
              >
                Ghost-Trap
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12"
              >
                A honeypot-based login monitoring system built with serverless architecture. 
                Detecting threats through deception and real-time alerting.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => setView('decoy')}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  View Decoy Login <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => runSimulation()}
                  disabled={isSimulating}
                  className="px-8 py-4 bg-gray-900 border border-gray-800 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <Activity className="w-4 h-4" /> {isSimulating ? "Simulating..." : "Run Simulation"}
                </button>
              </motion.div>
            </div>
          </header>

          {/* Architecture Section */}
          <section id="architecture" className="py-24 px-6 bg-[#0d0d0d]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
                <p className="text-gray-400 max-w-2xl">
                  Ghost-Trap leverages a serverless stack to minimize operational overhead while maximizing detection speed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2 z-0" />
                
                {architectureSteps.map((step, index) => (
                  <motion.div 
                    key={step.id}
                    whileHover={{ y: -5 }}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`relative z-10 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeStep === step.id 
                        ? 'bg-gray-900 border-gray-700 shadow-xl' 
                        : 'bg-[#151515] border-gray-800'
                    }`}
                  >
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                    
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-gray-500 font-mono pt-4 border-t border-gray-800"
                        >
                          {step.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Working & Relevance */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-orange-400" />
                  <h2 className="text-3xl font-bold">How it Works</h2>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">Deception Mechanism</h4>
                      <p className="text-gray-400">The fake login page is designed to appear in search results or be discovered by automated scanners. It mimics a sensitive administrative interface.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">Metadata Capture</h4>
                      <p className="text-gray-400">When an interaction occurs, the system doesn't just log the attempt. It captures the attacker's IP, browser fingerprint, and the specific credentials they are testing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-bold mb-1 text-lg">Zero-Access Policy</h4>
                      <p className="text-gray-400">Crucially, the system provides NO access. No matter what credentials are used, the attacker is met with a generic error or a fake loading state, keeping them engaged while alerts are sent.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h2 className="text-3xl font-bold">Security Relevance</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-5 h-5 text-blue-400" />
                      <h4 className="font-bold">Early Warning System</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Detects attackers during the reconnaissance phase, before they find a real vulnerability in your production systems.</p>
                  </div>
                  <div className="p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-5 h-5 text-purple-400" />
                      <h4 className="font-bold">Threat Intelligence</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Gathers data on the types of passwords being used in brute-force attacks and the geographic location of threat actors.</p>
                  </div>
                  <div className="p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                      <Lock className="w-5 h-5 text-green-400" />
                      <h4 className="font-bold">Low False Positives</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Since no legitimate user should ever visit the decoy page, almost 100% of alerts are high-fidelity indicators of malicious intent.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Decoy Login View */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center bg-[#020203] px-6 relative overflow-hidden"
        >
          {/* Advanced Mesh Gradient Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </div>
          
          <button 
            onClick={() => setView('docs')}
            className="fixed top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 z-50 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-medium tracking-tight">Security Dashboard</span>
          </button>

          <div className="w-full max-w-[460px] relative z-10">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
              className="relative"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-indigo-500/50 rounded-[2.5rem] blur-sm opacity-50" />
              
              <div className="relative bg-[#0a0a0c]/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
                <div className="p-12 pb-8">
                  <div className="flex justify-center mb-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center relative border border-white/20 shadow-2xl">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="text-center space-y-3">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Ghost-Trap</h2>
                    <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">Secure Node Authentication</p>
                  </div>
                </div>

                <form onSubmit={handleDecoyLogin} className="p-12 pt-0 space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Operator ID</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input 
                        name="username"
                        type="text" 
                        required
                        placeholder="Username"
                        className="w-full pl-14 pr-6 py-5 bg-white/[0.03] border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all text-white placeholder:text-gray-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Access Key</label>
                      <button type="button" className="text-[10px] text-blue-400 hover:text-blue-300 font-black uppercase tracking-widest transition-colors">Recovery</button>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Key className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input 
                        name="password"
                        type="password" 
                        required
                        placeholder="••••••••••••"
                        className="w-full pl-14 pr-6 py-5 bg-white/[0.03] border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all text-white placeholder:text-gray-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1">
                    <label className="flex items-center gap-3 text-sm text-gray-400 cursor-pointer group select-none">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          id="remember"
                          className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/5 checked:bg-blue-600 transition-all" 
                        />
                        <Shield className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-1.5" />
                      </div>
                      <span className="group-hover:text-gray-300 transition-colors">Encrypted Session</span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSimulating}
                    className="w-full py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:brightness-110 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 active:scale-[0.97] disabled:opacity-50"
                  >
                    {isSimulating ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <span>Initialize Access</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="px-12 py-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0c] bg-gray-800 overflow-hidden shadow-lg">
                        <img src={`https://picsum.photos/seed/cyber${i}/64/64`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active Nodes</p>
                    <p className="text-sm text-blue-400 font-mono font-bold">1,240 ONLINE</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
                <span className="flex items-center gap-2.5"><Lock className="w-3.5 h-3.5 text-green-500" /> E2EE</span>
                <span className="flex items-center gap-2.5"><Globe className="w-3.5 h-3.5 text-blue-500" /> GLOBAL</span>
                <span className="flex items-center gap-2.5"><Zap className="w-3.5 h-3.5 text-yellow-500" /> REAL-TIME</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
                <p className="text-gray-500 text-[10px] font-medium tracking-wide">
                  SECURE IP LOGGED: <span className="text-blue-400 font-mono">192.168.1.42</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Simulation Terminal (Floating) */}
      <AnimatePresence>
        {(isSimulating || simulationLogs.length > 0) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 w-full max-w-md z-50 px-6 md:px-0"
          >
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Ghost-Trap Monitor</span>
                </div>
                <button onClick={() => setSimulationLogs([])} className="text-gray-500 hover:text-white">×</button>
              </div>
              <div className="p-4 font-mono text-sm h-64 overflow-y-auto bg-black/50">
                {simulationLogs.map((log, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className={`mb-1 ${log.startsWith('✅') ? 'text-green-400' : 'text-gray-300'}`}
                  >
                    <span className="text-gray-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log}
                  </motion.div>
                ))}
                {isSimulating && (
                  <motion.div 
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-blue-500 inline-block ml-1 align-middle"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech Stack Footer */}
      <footer className="py-20 px-6 border-t border-gray-900 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold tracking-tighter">GHOST-TRAP</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-gray-500">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> GitHub Pages</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500" /> AWS Lambda</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500" /> API Gateway</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Discord API</span>
          </div>
          <p className="text-gray-600 text-xs">© 2026 Ghost-Trap Security. Built for detection.</p>
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
