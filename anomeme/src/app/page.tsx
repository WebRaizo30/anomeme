"use client";

import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  User, 
  Activity, 
  BarChart3,
  X,
  Settings,
  Target,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';
import { LandingPage } from '@/components/LandingPage';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [showIntentModal, setShowIntentModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  
  // Modal state management
  const [selectedTrigger, setSelectedTrigger] = useState('social');
  const [selectedAction, setSelectedAction] = useState('buy');

  const handleConnect = () => {
    setIsConnected(true);
  };

  // Show landing page if not connected
  if (!isConnected) {
    return <LandingPage onConnect={handleConnect} />;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* ANOMA PREMIUM HEADER */}
      <header className="h-20 border-b border-white/10 bg-black/50 backdrop-blur-xl animate-fade-in-up">
        <div className="h-full px-8 flex items-center justify-between">
          {/* ANOMA Branding */}
          <div className="flex items-center gap-6 animate-slide-in-left">
            <Tooltip content="ANOMEME: Intent-Centric Memecoin Trading Platform powered by ANOMA. Experience the future of social-driven cryptocurrency trading with MEV protection and automated intent execution." position="bottom">
              <div className="text-3xl font-black anoma-text tracking-wider cursor-pointer animate-subtle-glow">
                ANOMEME
              </div>
            </Tooltip>
            <div className="h-8 w-px bg-white/20 animate-stagger-1"></div>
            <Tooltip content="Social Intent Terminal: Advanced trading interface that converts social signals into executable trading intents. Monitor real-time sentiment, execute protected trades, and manage risk automatically." position="bottom">
              <div className="text-lg text-white/70 font-mono font-light tracking-wide animate-stagger-2">
                SOCIAL INTENT TERMINAL
              </div>
            </Tooltip>
          </div>

          {/* Premium User Interface */}
          <div className="flex items-center gap-6">
            <Tooltip content="Active User Session: Currently connected as elite trader with real-time access to social signals and intent execution capabilities." position="bottom" delay={200}>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/90 font-mono">HACKER_0x4A8F</span>
              </div>
            </Tooltip>
            <Tooltip content="Experience Points: Earned through successful intent executions, MEV-protected trades, and social signal accuracy. Higher XP unlocks advanced features." position="bottom">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <span className="text-sm accent-text font-mono font-semibold">⚡ 2.4K XP</span>
              </div>
            </Tooltip>
            <Tooltip content="System Status: Three green indicators showing ANOMA connectivity, MEV Shield status, and Intent Engine availability." position="bottom">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 status-active animate-status-blink"></div>
                <div className="w-3 h-3 bg-green-500 status-active animate-status-blink animate-stagger-1"></div>
                <div className="w-3 h-3 bg-green-500 status-active animate-status-blink animate-stagger-2"></div>
              </div>
            </Tooltip>
          </div>
        </div>
      </header>

      {/* UNIFIED TERMINAL INTERFACE */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* LEFT SIDEBAR - Social Signals & Actions */}
        <div className="w-80 bg-gray-900/20 border-r border-white/10 backdrop-blur-xl flex flex-col anoma-sidebar-scroll overflow-y-auto">
          
          {/* LIVE SOCIAL FEED */}
          <div className="flex-1 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-red-500 animate-red-glow" />
              <Tooltip content="Live Social Signals: Real-time monitoring of Twitter, Telegram, and Discord for memecoin sentiment. AI analyzes social data to identify potential trading opportunities and rug pull risks." position="bottom">
                <h2 className="text-lg font-bold anoma-text animate-text-glow cursor-help">LIVE SIGNALS</h2>
              </Tooltip>
              <div className="flex items-center gap-1 px-2 py-1 bg-red-500/20 border border-red-500/30 animate-signal-ping">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-live-badge"></div>
                <span className="text-xs accent-text font-bold animate-data-flicker">LIVE</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* TRIGGERED SIGNAL */}
              <div className="p-4 bg-red-500/10 border-l-4 border-red-500 backdrop-blur-sm animate-slide-in-right animate-bg-pulse">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white animate-fade-in-up animate-text-glow">@elonmusk</span>
                  <span className="text-xs text-white/50 font-mono animate-data-flicker">2s ago</span>
                </div>
                <p className="text-sm text-white/90 mb-3 font-medium animate-stagger-1">
                  &ldquo;DOGE to the moon! 🚀&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="success-text animate-count-up">Sentiment: 92%</span>
                  <span className="text-red-500 font-bold animate-red-glow text-xs">⚡ TRIGGERED</span>
                </div>
              </div>

              {/* PROCESSING SIGNAL */}
              <div className="p-4 bg-yellow-500/5 border-l-4 border-yellow-500/30 backdrop-blur-sm animate-yellow-pulse">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-yellow-400 animate-data-flicker">@whale_alert</span>
                  <span className="text-xs text-white/50 font-mono animate-data-flicker">15s ago</span>
                </div>
                <p className="text-sm text-white/80 mb-3">
                  &ldquo;🚨 50M USDC moved to Binance&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400 animate-count-up">Market Impact: High</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-processing-spin"></div>
                    <span className="text-yellow-400 font-mono animate-data-flicker">PROCESSING</span>
                  </div>
                </div>
              </div>

              {/* SCANNING SIGNAL */}
              <div className="p-4 bg-white/5 border-l-4 border-white/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white">@VitalikButerin</span>
                  <span className="text-xs text-white/50 font-mono">1m ago</span>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  &ldquo;Ethereum scaling progress is amazing&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Sentiment: 78%</span>
                  <span className="text-white/40 font-mono">SCANNING...</span>
                </div>
              </div>

              {/* REJECTED SIGNAL */}
              <div className="p-3 bg-red-500/5 border-l-4 border-red-500/30 backdrop-blur-sm opacity-60 animate-rejected-shake">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-red-400 animate-data-flicker line-through">@fake_account</span>
                  <span className="text-xs text-white/30 font-mono animate-data-flicker">3m ago</span>
                </div>
                <p className="text-xs text-white/50 mb-2 line-through opacity-75">
                  &ldquo;Buy SCAM coin now!!!&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-red-400">Risk: 95%</span>
                  <span className="text-red-400 font-bold">❌ REJECTED</span>
                </div>
              </div>
            </div>

            {/* CREATE INTENT BUTTON */}
            <div className="mt-8 animate-fade-in-up animate-stagger-3">
              <Tooltip content="Create New Trading Intent: Launch the intent builder to set up automated trades based on social signals or price movements. Configure risk parameters and MEV protection settings." position="top">
                <button 
                  onClick={() => setShowIntentModal(true)}
                  className="w-full p-4 bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 transition-all text-white font-bold tracking-wide animate-bg-pulse"
                >
                  + CREATE NEW INTENT
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* CENTER - Main Dashboard */}
        <div className="flex-1 flex flex-col">
          
          {/* TOP SECTION - Portfolio & Execution */}
          <div className="h-1/2 flex">
            
            {/* PORTFOLIO */}
            <div className="flex-1 p-6 bg-gray-900/5 border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <Tooltip content="Portfolio Dashboard: Track your memecoin positions with real-time P&L, total portfolio value, and individual token performance. All trades are MEV-protected through Anoma's intent system." position="top">
                  <h2 className="text-lg font-bold anoma-text cursor-help">PORTFOLIO</h2>
                </Tooltip>
              </div>

              <div className="space-y-6">
                {/* MAIN STATS */}
                <div className="text-center space-y-2 animate-scale-in">
                  <div className="text-5xl font-black success-text tracking-tight animate-count-up cursor-pointer">
                    +247%
                  </div>
                  <div className="text-2xl anoma-text font-mono font-bold animate-count-up animate-stagger-1 cursor-pointer">
                    $12,847
                  </div>
                  <div className="text-base success-text font-semibold animate-stagger-2 animate-data-flicker">
                    24h: +15%
                  </div>
                </div>
                
                {/* POSITIONS */}
                <div className="space-y-2 max-h-[200px] overflow-y-auto anoma-sidebar-scroll">
                  <div className="flex justify-between items-center p-2 bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-semibold">DOGE</span>
                      <span className="text-xs text-white/50">$0.08</span>
                    </div>
                    <div className="text-right">
                      <div className="success-text font-bold">+23%</div>
                      <div className="text-xs text-white/60">$2,847</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-semibold">PEPE</span>
                      <span className="text-xs text-white/50">$0.000012</span>
                    </div>
                    <div className="text-right">
                      <div className="accent-text font-bold">-5%</div>
                      <div className="text-xs text-white/60">$1,203</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-semibold">SHIB</span>
                      <span className="text-xs text-white/50">$0.000008</span>
                    </div>
                    <div className="text-right">
                      <div className="success-text font-bold">+8%</div>
                      <div className="text-xs text-white/60">$956</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-semibold">FLOKI</span>
                      <span className="text-xs text-white/50">$0.00014</span>
                    </div>
                    <div className="text-right">
                      <div className="success-text font-bold">+12%</div>
                      <div className="text-xs text-white/60">$734</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-semibold">BABYDOGE</span>
                      <span className="text-xs text-white/50">$0.0000025</span>
                    </div>
                    <div className="text-right">
                      <div className="accent-text font-bold">-2%</div>
                      <div className="text-xs text-white/60">$412</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EXECUTION STATUS */}
            <div className="w-80 p-6 bg-gray-900/5">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-green-500" />
                <Tooltip content="Intent Execution Engine: Monitor active trading intents with MEV protection. Each intent is processed through Anoma's ordering machine for optimal execution timing and front-running protection." position="top">
                  <h2 className="text-lg font-bold anoma-text cursor-help">EXECUTION</h2>
                </Tooltip>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <Tooltip content="Active Trading Intent: This intent is currently being processed through Anoma's ordering machine. The execution progress shows completion status with MEV protection active." position="top">
                      <span className="text-sm font-bold text-white cursor-help">INTENT #3</span>
                    </Tooltip>
                    <span className="text-xs success-text font-bold">EXECUTING</span>
                  </div>
                  <Tooltip content="MEV Shield Protection: Anoma's advanced protection against Maximum Extractable Value attacks. Uses commit-reveal schemes, reputation slashing, and timelock encryption to prevent front-running and sandwich attacks." position="bottom">
                    <div className="text-xs text-white/70 mb-3 animate-data-flicker cursor-help">
                      🛡️ MEV SHIELD: ACTIVE
                    </div>
                  </Tooltip>
                  <div className="w-full bg-black/20 h-3 overflow-hidden">
                    <div className="bg-green-500 h-3 w-3/4 animate-progress animate-red-glow"></div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Gas Used:</span>
                    <span className="text-white">127,543</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Slippage:</span>
                    <span className="success-text">2.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Execution Time:</span>
                    <span className="text-white">0.3s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION - Risk & Analytics */}
          <div className="h-1/2 flex">
            
            {/* RISK MATRIX */}
            <div className="flex-1 p-6 bg-gray-900/5 border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-green-500" />
                <Tooltip content="Risk Assessment Matrix: Advanced AI-powered risk analysis checking for rug pulls, honeypots, liquidity risks, and token contract security. Prevents trading of dangerous tokens." position="top">
                  <h2 className="text-lg font-bold anoma-text cursor-help">RISK MATRIX</h2>
                </Tooltip>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 glow-success"></div>
                    <span className="text-white font-semibold">RUG SCAN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 glow-success"></div>
                    <span className="text-white font-semibold">LIQ CHECK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 glow-red"></div>
                    <span className="text-white font-semibold">HONEYPOT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 glow-success"></div>
                    <span className="text-white font-semibold">CONTRACT</span>
                  </div>
                </div>

                <div className="p-4 bg-green-500/5 border border-green-500/10">
                  <Tooltip content="AI Risk Assessment: Comprehensive analysis of honeypots, rug pull indicators, liquidity depth, contract security, and social sentiment. Lower scores indicate safer trading opportunities." position="top">
                    <div className="text-lg font-bold success-text mb-3 cursor-help">
                      RISK SCORE: 15/100
                    </div>
                  </Tooltip>
                  <div className="w-full bg-black/20 h-4">
                    <div className="bg-green-500 h-4 w-1/6"></div>
                  </div>
                  <div className="text-sm success-text mt-2 font-semibold">LOW RISK</div>
                </div>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className="w-80 p-6 bg-gray-900/5">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-5 h-5 text-white" />
                <Tooltip content="Performance Analytics: Comprehensive trading statistics including total intents executed, success rates, and platform metrics. Track your progress and optimize trading strategies." position="top">
                  <h2 className="text-lg font-bold anoma-text cursor-help">ANALYTICS</h2>
                </Tooltip>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="cursor-pointer">
                    <div className="text-3xl font-bold success-text animate-count-up">96%</div>
                    <div className="text-sm text-white/60 animate-stagger-1">SUCCESS</div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="text-3xl font-bold text-white animate-count-up animate-stagger-1">0.3s</div>
                    <div className="text-sm text-white/60 animate-stagger-2">AVG EXEC</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Total Intents:</span>
                    <span className="text-white">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Rugs Blocked:</span>
                    <span className="success-text">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">MEV Saved:</span>
                    <span className="success-text">$2,341</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Gas Optimized:</span>
                    <span className="text-white">15%</span>
                  </div>
                </div>

                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 text-center">
                  <div className="text-sm text-yellow-400 font-bold">
                    🏆 RANK #127
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR - User Panel */}
        <div className="w-80 bg-gray-900/20 border-l border-white/10 backdrop-blur-xl p-6 anoma-sidebar-scroll overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-white" />
            <h2 className="text-lg font-bold anoma-text">USER PROFILE</h2>
          </div>

          <div className="space-y-6">
            {/* WALLET STATUS */}
            <div className="p-4 bg-green-500/10 border border-green-500/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/60">WALLET:</span>
                <span className="success-text font-bold">CONNECTED</span>
              </div>
              <div className="text-sm text-white/50 font-mono">
                0x4A8F...B2C9
              </div>
            </div>

            {/* RISK PROFILE */}
            <div className="p-4 bg-white/5 border border-white/10">
              <div className="text-base font-bold text-white mb-4">
                RISK PROFILE
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Level:</span>
                  <span className="text-white">3/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Max Loss:</span>
                  <span className="accent-text">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Daily Limit:</span>
                  <span className="text-white">$500</span>
                </div>
              </div>
            </div>

            {/* TODAY'S ACTIVITY */}
            <div className="p-4 bg-white/5 border border-white/10">
              <div className="text-base font-bold text-white mb-4">
                TODAY&apos;S ACTIVITY
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Intents:</span>
                  <span className="text-white">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Executed:</span>
                  <span className="success-text">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Success Rate:</span>
                  <span className="success-text">96%</span>
                </div>
              </div>
            </div>

            {/* SETTINGS BUTTON */}
            <Tooltip content="Platform Settings: Configure risk management preferences, automation rules, and notification settings. Customize your trading experience and security parameters." position="top">
              <button 
                onClick={() => setShowSettingsModal(true)}
                className="w-full p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-semibold"
              >
                ⚙️ SETTINGS
              </button>
            </Tooltip>
          </div>
        </div>
        
      </main>

      {/* POWERED BY ANOMA FOOTER */}
      <footer className="h-10 border-t border-white/10 bg-black/30 backdrop-blur-xl flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs text-white/60 font-mono animate-fade-in-up animate-stagger-3">
          <span>Powered by</span>
          <span className="text-red-500 font-semibold tracking-wide animate-subtle-glow">ANOMA</span>
          <span className="text-white/40">•</span>
          <span className="text-white/50">Web3’s Intent-Centric OS</span>
        </div>
      </footer>

      {/* CREATE INTENT MODAL */}
      {showIntentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in-up">
          <div className="bg-gray-900/90 border border-white/20 backdrop-blur-xl w-[800px] max-h-[90vh] overflow-y-auto anoma-modal-scroll animate-scale-in">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 accent-text" />
                <h2 className="text-xl font-bold anoma-text">CREATE NEW INTENT</h2>
              </div>
              <button 
                onClick={() => setShowIntentModal(false)}
                className="p-2 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 space-y-6">
              
              {/* STEP 1: TRIGGER CONDITION */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center">1</span>
                  TRIGGER CONDITION
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSelectedTrigger('social')}
                    className={`p-4 border cursor-pointer hover:bg-red-500/20 transition-all text-left ${
                      selectedTrigger === 'social' 
                        ? 'bg-red-500/20 border-red-500/40' 
                        : 'bg-red-500/10 border-red-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-white">Social Signal</span>
                    </div>
                    <p className="text-sm text-white/70">Trigger on social media posts</p>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedTrigger('price')}
                    className={`p-4 border cursor-pointer hover:bg-white/10 transition-all text-left ${
                      selectedTrigger === 'price' 
                        ? 'bg-white/10 border-white/20' 
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-white" />
                      <span className="font-semibold text-white">Price Movement</span>
                    </div>
                    <p className="text-sm text-white/70">Trigger on price changes</p>
                  </button>
                </div>

                {/* TRIGGER DETAILS */}
                {selectedTrigger === 'social' && (
                <div className="p-4 bg-red-500/5 border border-red-500/10">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Social Source</label>
                      <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white font-mono">
                        <option value="@elonmusk">@elonmusk</option>
                        <option value="@VitalikButerin">@VitalikButerin</option>
                        <option value="@whale_alert">@whale_alert</option>
                        <option value="custom">Custom...</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Keywords</label>
                      <input 
                        type="text" 
                        placeholder="DOGE, dogecoin, moon"
                        className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Sentiment</label>
                        <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white">
                          <option value="positive">Positive</option>
                          <option value="negative">Negative</option>
                          <option value="any">Any</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Confidence</label>
                        <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white">
                          <option value="70">70%+</option>
                          <option value="80">80%+</option>
                          <option value="90">90%+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {/* PRICE MOVEMENT DETAILS */}
                {selectedTrigger === 'price' && (
                <div className="p-4 bg-blue-500/5 border border-blue-500/10">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Token</label>
                      <input 
                        type="text" 
                        placeholder="DOGE, PEPE, SHIB..."
                        className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Price Change</label>
                        <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white">
                          <option value="increase">Increase</option>
                          <option value="decrease">Decrease</option>
                          <option value="any">Any Change</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Percentage</label>
                        <input 
                          type="text" 
                          placeholder="5%"
                          className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Time Frame</label>
                      <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white">
                        <option value="1m">1 Minute</option>
                        <option value="5m">5 Minutes</option>
                        <option value="15m">15 Minutes</option>
                        <option value="1h">1 Hour</option>
                      </select>
                    </div>
                  </div>
                </div>
                )}
              </div>

              {/* STEP 2: TRADING ACTION */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center">2</span>
                  TRADING ACTION
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSelectedAction('buy')}
                    className={`p-4 border cursor-pointer hover:bg-green-500/20 transition-all text-left ${
                      selectedAction === 'buy' 
                        ? 'bg-green-500/20 border-green-500/40' 
                        : 'bg-green-500/10 border-green-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-white">BUY</span>
                    </div>
                    <p className="text-sm text-white/70">Buy token when triggered</p>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedAction('sell')}
                    className={`p-4 border cursor-pointer hover:bg-red-500/20 transition-all text-left ${
                      selectedAction === 'sell' 
                        ? 'bg-red-500/20 border-red-500/40' 
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className={`w-5 h-5 ${selectedAction === 'sell' ? 'text-red-500' : 'text-white'}`} />
                      <span className="font-semibold text-white">SELL</span>
                    </div>
                    <p className="text-sm text-white/70">Sell token when triggered</p>
                  </button>
                </div>

                <div className={`p-4 border ${
                  selectedAction === 'buy' 
                    ? 'bg-green-500/5 border-green-500/10' 
                    : 'bg-red-500/5 border-red-500/10'
                }`}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Token</label>
                      <input 
                        type="text" 
                        placeholder="DOGE, PEPE, SHIB..."
                        className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Amount</label>
                        <input 
                          type="text" 
                          placeholder="$100"
                          className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Max Slippage</label>
                        <select className="anoma-select w-full p-3 bg-black/20 border border-white/10 text-white">
                          <option value="1">1%</option>
                          <option value="3">3%</option>
                          <option value="5">5%</option>
                          <option value="10">10%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3: RISK MANAGEMENT */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center">3</span>
                  RISK MANAGEMENT
                </h3>
                
                <div className="p-4 bg-yellow-500/5 border border-yellow-500/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Stop Loss</label>
                      <input 
                        type="text" 
                        placeholder="20%"
                        className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Take Profit</label>
                      <input 
                        type="text" 
                        placeholder="50%"
                        className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="rug-protection" className="anoma-checkbox w-4 h-4" defaultChecked />
                      <label htmlFor="rug-protection" className="text-sm text-white">
                        🛡️ Rug Pull Protection
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="mev-protection" className="anoma-checkbox w-4 h-4" defaultChecked />
                      <label htmlFor="mev-protection" className="text-sm text-white">
                        ⚡ MEV Protection
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="sniper-protection" className="anoma-checkbox w-4 h-4" defaultChecked />
                      <label htmlFor="sniper-protection" className="text-sm text-white">
                        🎯 Anti-Sniper Protection
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* INTENT PREVIEW */}
              <div className="p-4 bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-3">INTENT PREVIEW</h4>
                <div className="p-4 bg-black/20 font-mono text-sm text-white/80">
                  IF @elonmusk mentions &ldquo;DOGE&rdquo; with positive sentiment (70%+)<br/>
                  THEN buy $100 DOGE with max 3% slippage<br/>
                  WITH stop loss at 20% and take profit at 50%<br/>
                  PROTECTED by rug detection, MEV shield, and anti-sniper
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="flex items-center justify-between p-6 border-t border-white/10">
              <button 
                onClick={() => setShowIntentModal(false)}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                CANCEL
              </button>
              <button className="px-8 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-all">
                CREATE INTENT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SETTINGS MODAL */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in-up">
          <div className="bg-gray-900/90 border border-white/20 backdrop-blur-xl w-[600px] max-h-[90vh] overflow-y-auto anoma-modal-scroll animate-scale-in">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold anoma-text">SETTINGS</h2>
              </div>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="p-2 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 space-y-6">
              
              {/* RISK MANAGEMENT */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  RISK MANAGEMENT
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Max Daily Loss</label>
                    <input 
                      type="text" 
                      defaultValue="$500"
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Max Position Size</label>
                    <input 
                      type="text" 
                      defaultValue="20%"
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Global Stop Loss</label>
                    <input 
                      type="text" 
                      defaultValue="25%"
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* AUTOMATION */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">AUTOMATION</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Auto Execute Intents</span>
                    <button className="anoma-toggle w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="anoma-toggle-slider w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white">MEV Protection</span>
                    <button className="anoma-toggle w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="anoma-toggle-slider w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white">Rug Detection</span>
                    <button className="anoma-toggle w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="anoma-toggle-slider w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* NOTIFICATIONS */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">NOTIFICATIONS</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Telegram Bot Token</label>
                    <input 
                      type="text" 
                      placeholder="Enter bot token..."
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Discord Webhook</label>
                    <input 
                      type="text" 
                      placeholder="Discord webhook URL..."
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email Alerts</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="anoma-input w-full p-3 bg-black/20 border border-white/10 text-white font-mono placeholder-white/40"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="flex items-center justify-between p-6 border-t border-white/10">
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                CANCEL
              </button>
              <button className="px-8 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-all">
                SAVE SETTINGS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}