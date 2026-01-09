
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { jsPDF } from 'jspdf';
import logo from './logo.png';
import { 
  CheckCircle, 
  QrCode, 
  Stethoscope,
  Copy,
  Check,
  ShieldCheck,
  Printer,
  User,
  Phone,
  Mail,
  AlertCircle,
  Map
} from 'lucide-react';
import { JOURNEY_DATA } from './constants';
import { MilestoneId } from './types';

const App: React.FC = () => {
  const [activeStage, setActiveStage] = useState<MilestoneId>(MilestoneId.PRE_PREGNANCY);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // User details state
  const [momName, setMomName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const currentMilestone = JOURNEY_DATA.find(m => m.id === activeStage)!;

  const toggleItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const downloadPDF = () => {
    if (!mobileNumber.trim()) {
      setShowError(true);
      const element = document.getElementById('details-form');
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setShowError(false);

    // Load logo image for PDF
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      const doc = new jsPDF();
      
      const themeColor = [6, 78, 59] as const; // Emerald
      const goldColor = [180, 138, 40] as const;
      
      // --- HEADER SECTION ---
      // Logo
      const logoRatio = img.width / img.height;
      const logoHeight = 24;
      const logoWidth = logoHeight * logoRatio;
      doc.addImage(img, 'PNG', 15, 15, logoWidth, logoHeight);

      // Header Text
      const textStartX = 15 + logoWidth + 5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18); 
      doc.setTextColor(...themeColor);
      doc.text("MOM AND BABY JOURNEY", textStartX, 25);
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(120, 120, 120);
      doc.text("PERSONALIZED ESSENTIALS CHECKLIST", textStartX, 32);

      // User Info Box
      doc.setFillColor(248, 250, 252); // Light Gray/Blueish background
      doc.setDrawColor(6, 78, 59); // Emerald border
      doc.setLineWidth(0.1);
      doc.roundedRect(15, 45, 180, 25, 3, 3, 'FD');
      
      // User Info Content
      doc.setFontSize(9);
      
      // Column 1: Prepared For
      doc.setTextColor(...themeColor);
      doc.setFont("helvetica", "bold");
      doc.text("PREPARED FOR", 25, 54);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      doc.text(momName || "Valued Customer", 25, 62);
      
      // Column 2: Contact
      doc.setTextColor(...themeColor);
      doc.setFont("helvetica", "bold");
      doc.text("CONTACT DETAILS", 85, 54);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      doc.text(mobileNumber, 85, 62);
      if (email) doc.text(email, 85, 67);
      
      // Column 3: Date
      doc.setTextColor(...themeColor);
      doc.setFont("helvetica", "bold");
      doc.text("GENERATED ON", 145, 54);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      doc.text(new Date().toLocaleDateString(), 145, 62);
      doc.text(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), 145, 67);

      let yOffset = 85;

      // --- CHECKLIST CONTENT ---
      if (selectedItems.size === 0) {
         doc.setFontSize(12);
         doc.setTextColor(100, 100, 100);
         doc.text("No essentials selected. Please select items to build your checklist.", 105, yOffset, { align: 'center' });
      } else {
         // Group items by Milestone for better organization
         JOURNEY_DATA.forEach(milestone => {
            const stageItems = milestone.checklist.filter(item => selectedItems.has(item.id));
            
            if (stageItems.length > 0) {
               // Check if we need a new page for the header + at least one item
               if (yOffset > 250) { 
                 doc.addPage(); 
                 yOffset = 20; 
               }
               
               // Section Header (Milestone Title)
               doc.setFillColor(...themeColor);
               doc.rect(15, yOffset, 180, 8, 'F');
               doc.setTextColor(255, 255, 255);
               doc.setFont("helvetica", "bold");
               doc.setFontSize(10);
               doc.text(`STAGE: ${milestone.title.toUpperCase()}`, 20, yOffset + 5.5);
               
               yOffset += 15;
               
               // Items in this section
               stageItems.forEach(item => {
                  // Check page break for item
                  // Estimate height based on description length
                  const descLines = doc.splitTextToSize(item.description, 130);
                  const itemHeight = 10 + (descLines.length * 4) + 5;
                  
                  if (yOffset + itemHeight > 280) { 
                    doc.addPage(); 
                    yOffset = 20; 
                    // Repeat section header on new page? Optional, but good for context.
                    // Simplified header for continuation
                    doc.setFontSize(8);
                    doc.setTextColor(150, 150, 150);
                    doc.text(`(Continuation: ${milestone.title})`, 15, yOffset - 5);
                  }
                  
                  // Item Name
                  doc.setTextColor(0, 0, 0);
                  doc.setFontSize(11);
                  doc.setFont("helvetica", "bold");
                  doc.text(item.name, 25, yOffset);
                  
                  // Category Badge (Right aligned)
                  doc.setFillColor(240, 240, 240);
                  doc.setDrawColor(200, 200, 200);
                  doc.roundedRect(155, yOffset - 4, 40, 6, 2, 2, 'FD');
                  doc.setTextColor(...themeColor);
                  doc.setFontSize(7);
                  doc.text(item.category.toUpperCase(), 175, yOffset, { align: 'center' });
                  
                  // Checkbox Icon (Visual - Empty for manual check)
                  doc.setDrawColor(...themeColor);
                  doc.setLineWidth(0.5);
                  doc.rect(16, yOffset - 3, 4, 4);
                  
                  // Description
                  yOffset += 5;
                  doc.setTextColor(80, 80, 80);
                  doc.setFontSize(9);
                  doc.setFont("helvetica", "normal");
                  doc.text(descLines, 25, yOffset);
                  
                  // Spacing for next item
                  yOffset += (descLines.length * 4) + 8;
                  
                  // Light separator line
                  doc.setDrawColor(230, 230, 230);
                  doc.line(25, yOffset - 4, 195, yOffset - 4);
               });
               
               yOffset += 5; // Extra gap after group
            }
         });
      }

      // --- FOOTER ---
      const totalPages = (doc as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text("Thank you for choosing Al Habib Pharmacy for your journey.", 105, 285, { align: 'center' });
        doc.text(`Page ${i} of ${totalPages}`, 195, 290, { align: 'right' });
      }
      
      doc.save(`Al-Habib-Journey-${mobileNumber}.pdf`);
    };
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      {/* 1. HEADER */}
      <header className="relative pt-12 pb-16 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Al Habib Pharmacy" className="h-32 w-auto mb-6 object-contain" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-emerald tracking-tighter mb-4 leading-tight">
              Al Habib Pharmacy <br />
              <span className="shiny-text font-bold">Mom and Baby Journey</span>
            </h1>
            <p className="text-emerald-900 opacity-80 max-w-xl text-lg font-medium leading-relaxed">
              Excellence in pharmaceutical care for every stage of your life's most precious journey.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 md:mt-0 flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowQR(true)} className="flex items-center gap-2 px-6 py-3 border-2 border-emerald text-emerald rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald hover:text-white transition-all whitespace-nowrap group">
              <QrCode size={18} className="group-hover:scale-110 transition-transform" />
              <span>Mobile Portal</span>
            </button>
            <button 
              onClick={downloadPDF} 
              className={`flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-dark transition-all shadow-xl shadow-emerald-900/20 whitespace-nowrap group`}
            >
              <Printer size={18} className="group-hover:scale-110 transition-transform" />
              <span>Export List ({selectedItems.size})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. USER DETAILS FORM (MANDATORY FIELDS) */}
      <section id="details-form" className="py-12 px-6 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-50/30 p-8 md:p-12 rounded-[3rem] border border-emerald-100/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-white">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gold-gradient-text">Personalize Your Journey</h3>
                <p className="text-xs text-emerald-900 font-bold uppercase tracking-widest">Details will be included in your exported list</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mom's Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-900 ml-1">Mom's Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900" size={20} />
                  <input 
                    type="text" 
                    placeholder="Enter full name"
                    value={momName}
                    onChange={(e) => setMomName(e.target.value)}
                    className="w-full bg-white border-2 border-emerald-100 rounded-2xl py-4 pl-12 pr-4 focus:border-emerald-900 outline-none transition-all font-bold text-lg text-emerald-950 placeholder:text-emerald-900/40"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-900 ml-1 flex justify-between">
                  Mobile Number <span className="text-emerald-600 text-[10px] font-bold">Mandatory*</span>
                </label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 ${showError && !mobileNumber ? 'text-red-600' : 'text-emerald-900'}`} size={20} />
                  <input 
                    type="tel" 
                    placeholder="e.g. 05XXXXXXX"
                    value={mobileNumber}
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                      if(e.target.value) setShowError(false);
                    }}
                    className={`w-full bg-white border-2 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-lg text-emerald-950 placeholder:text-emerald-900/40 ${showError && !mobileNumber ? 'border-red-200 focus:border-red-400 bg-red-50/30' : 'border-emerald-100 focus:border-emerald-900'}`}
                  />
                </div>
                {showError && !mobileNumber && (
                  <p className="text-[10px] text-red-600 font-bold ml-1 flex items-center gap-1">
                    <AlertCircle size={10} /> Please provide your mobile number to export
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-900 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900" size={20} />
                  <input 
                    type="email" 
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-emerald-100 rounded-2xl py-4 pl-12 pr-4 focus:border-emerald-900 outline-none transition-all font-bold text-lg text-emerald-950 placeholder:text-emerald-900/40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMINENT JOURNEY STAGES */}
      <section className="bg-emerald-50/20 py-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
              <div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
                <Map size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold gold-gradient-text">Journey Stages</h2>
            </div>
          
          <div className="relative py-12">
            {/* Wave Connector Line (Desktop) */}
            <div className="hidden xl:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
              {JOURNEY_DATA.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <button
                    key={milestone.id}
                    onClick={() => setActiveStage(milestone.id)}
                    className={`flex flex-col items-center p-6 rounded-[2.5rem] transition-all duration-500 border-2 text-center group relative ${
                      isEven ? 'xl:-translate-y-8' : 'xl:translate-y-8'
                    } ${
                      activeStage === milestone.id 
                        ? 'bg-emerald-900 border-emerald-900 active-stage-glow scale-110 z-20 shadow-2xl' 
                        : 'bg-white border-gray-100 hover:border-emerald-200'
                    }`}
                  >
                    {/* Connector Dots for Wave Effect */}
                    <div className={`hidden xl:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white transition-all duration-500 z-[-1] ${
                      isEven 
                        ? '-bottom-12 bg-emerald-200' 
                        : '-top-12 bg-emerald-200'
                    } ${activeStage === milestone.id ? 'bg-emerald-900 scale-125' : ''}`} />
                    
                    <div className={`hidden xl:block absolute left-1/2 -translate-x-1/2 w-[1px] bg-emerald-200 z-[-1] ${
                      isEven ? '-bottom-12 h-12' : '-top-12 h-12'
                    }`} />

                    <div className={`w-full aspect-square rounded-3xl overflow-hidden mb-6 transition-transform group-hover:scale-105 duration-700 shadow-md ${
                      activeStage === milestone.id ? 'ring-4 ring-emerald-400/30' : ''
                    }`}>
                      <img 
                        src={milestone.imageUrl} 
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
                      activeStage === milestone.id ? 'text-emerald-300' : 'text-emerald-700'
                    }`}>
                      Stage 0{idx + 1}
                    </p>
                    <h4 className={`text-sm font-bold tracking-tight leading-tight ${
                      activeStage === milestone.id ? 'text-white' : 'text-black'
                    }`}>
                      {milestone.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE STAGE DETAILS & LIST */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="animate-reveal">
              <h3 className="text-4xl md:text-5xl font-serif font-bold shiny-text mb-6 italic leading-tight">{currentMilestone.subtitle}</h3>
              <p className="text-xl text-emerald-900 font-medium leading-relaxed mb-10 border-l-4 border-gold pl-6">
                {currentMilestone.description}
              </p>
              
              <div className="space-y-6">
                <div className="p-10 bg-emerald-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <ShieldCheck size={120} />
                  </div>
                  <div className="flex items-center gap-3 mb-4 text-emerald-300">
                    <ShieldCheck size={28} />
                    <h5 className="font-bold text-xs uppercase tracking-widest">Clinical Insight</h5>
                  </div>
                  <p className="text-lg font-light leading-relaxed italic opacity-90 relative z-10">"{currentMilestone.clinicalInsight}"</p>
                </div>

                <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 group">
                  <div className="flex items-center gap-3 mb-4 text-emerald-900">
                    <Stethoscope size={28} />
                    <h5 className="font-bold text-xs uppercase tracking-widest">Expert Tip</h5>
                  </div>
                  <p className="text-lg font-light leading-relaxed italic text-emerald-950 opacity-80">"{currentMilestone.expertTip}"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="lg:col-span-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h3 className="text-4xl font-serif font-bold gold-gradient-text italic">Curated Essentials</h3>
              <div className="bg-emerald text-white px-6 py-2 rounded-full flex items-center gap-3 shadow-lg shadow-emerald-900/10 border border-emerald-400/30">
                 <span className="w-2 h-2 rounded-full bg-emerald-bright animate-pulse"></span>
                 <span className="text-xs font-black uppercase tracking-widest">
                  {currentMilestone.checklist.length} Products Available
                 </span>
              </div>
            </div>

            <div className="checklist-grid">
              {currentMilestone.checklist.map((item) => {
                const isSelected = selectedItems.has(item.id);
                return (
                  <div 
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-8 rounded-[2.5rem] cursor-pointer group flex flex-col justify-between h-full border-2 transition-all duration-500 hover:scale-[1.02] ${
                      isSelected 
                        ? 'bg-emerald-700 text-white border-emerald-700' 
                        : 'glass-card border-transparent'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-xl border ${
                          isSelected ? 'bg-white/10 text-emerald-300 border-white/20' : 'bg-emerald-50 text-emerald-800 border-emerald-100'
                        }`}>
                          {item.category}
                        </span>
                        <div className={`transition-all duration-300 ${isSelected ? 'scale-110' : 'opacity-20 group-hover:opacity-100'}`}>
                          {isSelected 
                            ? <CheckCircle size={32} className="text-emerald-300" /> 
                            : <div className="w-8 h-8 rounded-full border-2 border-emerald-900"></div>
                          }
                        </div>
                      </div>
                      <h4 className={`text-xl font-bold mb-3 leading-tight tracking-tight ${isSelected ? 'text-white' : 'text-emerald-dark'}`}>
                        {item.name}
                      </h4>
                    </div>
                    <p className={`text-base font-semibold leading-relaxed ${isSelected ? 'text-white' : 'text-emerald-900'}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Portal Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" onClick={() => setShowQR(false)}>
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-900">
              <QrCode size={40} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-emerald-dark">Mobile Access</h3>
            <p className="text-emerald-900/60 mb-10 text-sm leading-relaxed font-light italic">Sync your curated checklist for fast in-branch pharmacy fulfillment.</p>
            
            <div className="bg-white p-8 border border-gray-100 rounded-[3rem] inline-block mb-10">
              <QRCodeSVG value={window.location.href} size={200} level="H" includeMargin={false} fgColor="#064e3b" />
            </div>

            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="w-full py-5 bg-emerald-dark text-white rounded-full font-bold hover:bg-emerald transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? 'Link Copied' : 'Copy Access Link'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-emerald-dark text-white py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-16 mb-12">
            <div className="flex items-center gap-4">
            <img src={logo} alt="Al Habib Pharmacy" className="h-14 w-auto object-contain brightness-0 invert" />
              <h4 className="font-serif text-3xl font-bold">Al Habib <span className="text-emerald-300 italic font-light">Pharmacy</span></h4>
            </div>
            <p className="text-emerald-100/60 text-lg font-light italic max-w-sm text-center md:text-right">
              "Excellence in every beginning. Dedicated to the health of every mother and baby in our community."
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-emerald-100/40 text-[10px] tracking-[0.6em] uppercase font-bold gap-8">
            <p>© {new Date().getFullYear()} Dr. Sulaiman Al Habib Medical Group. All Rights Reserved.</p>
            <div className="flex gap-12">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Safety Standards</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
