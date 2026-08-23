"use client";

import {
  BarChart3,
  Check,
  SlidersHorizontal,
  Globe,
  Home,
  LayoutGrid,
  ListChecks,
  Mail,
  MessageCircle,
  Plus,
  Search,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useMessages } from "@/components/LocaleProvider";

type Channel = "wa" | "mail" | "web" | "won";

type Lead = {
  initials: string;
  name: string;
  company: string;
  value: string;
  score: number;
  star?: boolean;
  channel: Channel;
  time: string;
};

const COL_THEME = [
  { dot: "bg-cyan-400", value: "text-cyan-400", avatar: "from-cyan-400 to-teal-600" },
  { dot: "bg-violet-400", value: "text-violet-300", avatar: "from-violet-400 to-indigo-600" },
  { dot: "bg-orange-400", value: "text-orange-400", avatar: "from-orange-400 to-amber-600" },
  { dot: "bg-emerald-400", value: "text-emerald-400", avatar: "from-emerald-400 to-teal-700" },
] as const;

const LEADS: Lead[][] = [
  [
    {
      initials: "EC",
      name: "Elena C.",
      company: "Residencial Los Pinos",
      value: "$3,200",
      score: 86,
      star: true,
      channel: "wa",
      time: "hace 1 h",
    },
    {
      initials: "JM",
      name: "Jorge M.",
      company: "Automotriz Ceiba",
      value: "$1,450",
      score: 63,
      channel: "web",
      time: "hace 5 h",
    },
  ],
  [
    {
      initials: "BH",
      name: "Beatriz H.",
      company: "Clínica Pediátrica SPS",
      value: "$5,800",
      score: 91,
      star: true,
      channel: "mail",
      time: "ayer",
    },
    {
      initials: "RQ",
      name: "Ramón Q.",
      company: "Distribuidora Atlántida",
      value: "$2,350",
      score: 58,
      channel: "mail",
      time: "hace 2 d",
    },
    {
      initials: "IS",
      name: "Ingrid S.",
      company: "Panadería El Trigal",
      value: "$980",
      score: 77,
      channel: "wa",
      time: "hace 3 h",
    },
  ],
  [
    {
      initials: "HD",
      name: "Héctor D.",
      company: "Constructora Comayagua",
      value: "$14,500",
      score: 84,
      star: true,
      channel: "wa",
      time: "hace 2 d",
    },
    {
      initials: "NV",
      name: "Natalia V.",
      company: "Academia Bilingüe",
      value: "$6,750",
      score: 89,
      channel: "mail",
      time: "hace 4 d",
    },
  ],
  [
    {
      initials: "OF",
      name: "Óscar F.",
      company: "Hotel Copán",
      value: "$9,200",
      score: 100,
      channel: "won",
      time: "ganado",
    },
    {
      initials: "GR",
      name: "Gabriela R.",
      company: "Laboratorio Médico",
      value: "$4,100",
      score: 100,
      channel: "won",
      time: "ganado",
    },
  ],
];

function ChannelIcon({ channel }: { channel: Channel }) {
  const cls = "w-3.5 h-3.5 text-slate-400";
  if (channel === "wa") return <MessageCircle className={cls} />;
  if (channel === "mail") return <Mail className={cls} />;
  if (channel === "won") return <Check className="w-3.5 h-3.5 text-emerald-400" />;
  return <Globe className={cls} />;
}

export default function CrmDashboardDemo() {
  const c = useMessages().crm;
  const nav = [
    { label: c.uiNavHome, icon: Home },
    { label: c.uiNavLeads, icon: Users },
    { label: c.uiNavPipeline, icon: LayoutGrid, active: true },
    { label: c.uiNavTasks, icon: ListChecks },
    { label: c.uiNavMessages, icon: MessageCircle },
    { label: c.uiNavReports, icon: BarChart3 },
  ];
  const columns = [c.colNew, c.colContacted, c.colProposal, c.colWon];
  const kpis = [
    {
      label: c.kpiActive,
      value: "11",
      hint: c.kpiActiveHint,
      accent: "border-cyan-400",
      valueCls: "text-cyan-300",
    },
    {
      label: c.kpiPipeline,
      value: "$47.6k",
      hint: c.kpiPipelineHint,
      accent: "border-violet-400",
      valueCls: "text-violet-300",
    },
    {
      label: c.kpiConversion,
      value: "31%",
      hint: c.kpiConversionHint,
      accent: "border-orange-400",
      valueCls: "text-orange-300",
    },
    {
      label: c.kpiClosed,
      value: "5",
      hint: c.kpiClosedHint,
      accent: "border-emerald-400",
      valueCls: "text-emerald-300",
    },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-[#070b14] text-slate-100">
      <div className="flex min-h-[640px]">
        <aside className="hidden md:flex w-[220px] shrink-0 flex-col border-r border-white/10 bg-[#0a101c] p-4">
          <div className="flex items-center gap-2.5 mb-6 px-1">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-brand-navy flex items-center justify-center text-white text-xs font-bold">
              N
            </span>
            <span className="font-semibold tracking-tight">{c.uiBrand}</span>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold py-2.5 mb-6 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {c.uiNewLead}
          </button>

          <nav className="flex-1 space-y-1">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${
                    item.active
                      ? "bg-primary-500/15 text-primary-300 border border-primary-500/30"
                      : "text-slate-400"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.active ? "text-primary-400" : ""}`} />
                  {item.label}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-brand-navy flex items-center justify-center text-sm font-bold">
              E
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{c.uiUserName}</p>
              <p className="text-xs text-slate-500">{c.uiUserRole}</p>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0 p-4 sm:p-6">
          <div className="md:hidden flex items-center justify-between mb-4">
            <span className="font-semibold">{c.uiBrand}</span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-primary-500 text-white font-semibold">
              {c.uiNewLead}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{c.uiNavPipeline}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 flex-1 sm:w-56">
                <Search className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-500">{c.uiSearch}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-slate-300">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">{c.uiFilters}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-primary-500/10 border border-primary-500/20 px-4 py-3 mb-5">
            <Sparkles className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300">{c.uiAiLine}</p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-5">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className={`rounded-xl bg-[#101826] border border-white/10 border-t-2 ${kpi.accent} px-4 py-3`}
              >
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{kpi.label}</p>
                <p className={`text-2xl font-bold ${kpi.valueCls}`}>{kpi.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{kpi.hint}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {columns.map((col, i) => (
              <div
                key={col}
                className="rounded-xl bg-[#0c121e] border border-white/10 p-3 min-h-[320px] flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3 px-0.5">
                  <span className={`w-2 h-2 rounded-full ${COL_THEME[i].dot}`} />
                  <h4 className="text-sm font-semibold">{col}</h4>
                  <span className="ml-auto text-xs text-slate-500">{LEADS[i].length}</span>
                </div>
                <div className={`space-y-2 ${i === 1 ? "max-h-[280px] overflow-y-auto pr-1" : ""}`}>
                  {LEADS[i].map((lead) => (
                    <div key={lead.name} className="rounded-xl bg-[#141c2c] border border-white/10 p-3">
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${COL_THEME[i].avatar} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}
                        >
                          {lead.initials}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-1">
                            <p className="text-sm font-semibold truncate">{lead.name}</p>
                            {lead.star ? (
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                            ) : null}
                          </div>
                          <p className="text-xs text-slate-500 truncate">{lead.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className={`text-sm font-bold ${COL_THEME[i].value}`}>{lead.value}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary-500/15 text-primary-300 border border-primary-500/20">
                          IA {lead.score}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-white/5">
                        <ChannelIcon channel={lead.channel} />
                        <span className="text-[11px] text-slate-500">{lead.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
