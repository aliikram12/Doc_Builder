import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo
} from 'react';
import {
  Type, Download, Plus, Trash2, Settings, AlignLeft, AlignCenter, AlignRight,
  LayoutTemplate, Palette, FileText, Info, ScanLine, Maximize, Minimize, AlertCircle,
  TableIcon, Workflow, ImageIcon, X, Heading, Columns, Square, ChevronUp, ChevronDown,
  List, Calendar, Minus, Box, Split, Grid, Stamp, UploadCloud, Highlighter, Layers,
  Save, Upload, Copy, RotateCcw, CheckSquare, Sparkles, Loader2, Wand2,
  Bookmark, Share2, Cloud, History, Lock, Unlock, Eye, EyeOff, Search, Filter,
  FolderTree, Link2, Code, Video, Music, BarChart, PieChart, LineChart,
  FileJson, FileCode, Shield, Bell, Star, ThumbsUp, MessageSquare, Send,
  UserPlus, Users, Globe, Mail, Phone, MapPin, Clock, Award, Trophy,
  Printer, Clipboard, GitBranch, Database, ShieldCheck, QrCode,
  Fingerprint, Radar, Navigation, Compass, Target, TrendingUp, Activity, Zap,
  Cpu, CloudLightning, Microscope, Atom, Binary, Braces, FileSpreadsheet, FolderOpen,
  ArrowRightLeft, MoonStar, SunMedium, BookOpen, Code2, CopyCheck, Sigma,
  Braces as BracesIcon, CaseSensitive, SpellCheck, AlignJustify, Bold, Italic,
  Underline, ListOrdered, Quote, Link, Image as ImageIcon2, Table, FileDown,
  File, FileArchive, FileImage, FileJson2, FileSpreadsheet as FileSpreadsheet2,
  Sparkle, Trophy as TrophyIcon, Crown, Gem, Rocket, Brain, Target as TargetIcon,
  BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon, AreaChart,
  Radar as RadarIcon, Thermometer, Droplets, Wind, Sun, Moon, CloudRain,
  CloudSnow, CloudLightning as CloudLightningIcon, CloudSun, CloudMoon,
  Leaf, Flower2, TreePine, Mountain, Waves, Flame, Droplet, Bug,
  Globe2, Map, MapPinned, Navigation as NavigationIcon, Compass as CompassIcon,
  Route, Bike, Car, Plane, Train, Bus, Ship, Rocket as RocketIcon,
  Coffee, Pizza, Cake, Apple, Fish, Beef, EggFried, Utensils,
  Dumbbell, Running, Bike as BikeIcon, Swimmer, Heart, HeartPulse,
  Brain as BrainIcon, Microscope as MicroscopeIcon, FlaskConical, Dna,
  Calculator, Ruler, Weight, Scale, Gauge, Gavel, Briefcase, Building2,
  Banknote, CreditCard, PiggyBank, Landmark, Receipt, ChartNoAxesCombined,
  ChartColumn, ChartScatter, ChartCandlestick, ChartPie, ChartLine,
  ChartBar, ChartArea, ChartSpline, ChartTrendingUp, ChartTrendingDown,
  ChartColumnIncreasing, ChartColumnDecreasing,
  Smartphone, Laptop, Tablet, Watch, Headphones, Speaker, Tv, Gamepad2,
  Paintbrush, Brush, Pencil, Eraser, QrCode as QrCodeIcon,
  PenTool, Wrench, Hammer, Drill, Screwdriver, Pickaxe, Shovel, Construction,
  Wheat, Corn, Tractor, Sprout, Bird, Dog, Cat, Fish as FishIcon, Rabbit, Turtle, PawPrint, Bone,
  Github, Twitter, Facebook, Instagram, Linkedin, Youtube, Twitch, Discord,
  Figma, Chrome, Firefox, Edge, Safari, Terminal, Command, HardDrive, Server,
  Wifi, Bluetooth, Usb, Plug, Battery, BatteryCharging, Airplay, Cast, Radio, Podcast, Mic, Mic2,
  Film, Clapperboard, Camera, CameraOff, Album, Music2, Guitar, Piano, Drum, Violin, Trumpet, Saxophone,
  Hospital, Stethoscope, Ambulance, HeartHandshake,
  GraduationCap, School, Library, Book, Notebook, Scroll, ScrollText,
  ClipboardList, ClipboardCheck, ClipboardPaste, ClipboardCopy, FileSignature,
  FileCheck, FileX, FileSearch, FileWarning, FileLock, FileKey, FileVolume,
  FileDiff, FileBadge, FileBox, FileClock, Print, TableProperties, MergeCells,
  SplitCells, BorderAll, BorderNone, BorderLeft, BorderRight, BorderTop, BorderBottom,
  TextCursor, TextQuote, Highlighter as HighlighterIcon, Strikethrough, Subscript, Superscript,
  Undo, Redo, Eraser as EraserIcon, AlignVerticalJustifyStart, AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd,
  Grid3x3, LayoutGrid, TableProperties as TablePropertiesIcon, Merge, Split as SplitIcon,
  Rows, Columns as ColumnsIcon, Frame, BorderHorizontal, BorderVertical, Scissors
} from 'lucide-react';

// React-PDF imports
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image as PDFImage,
  PDFViewer,
  PDFDownloadLink
} from '@react-pdf/renderer';

// ==============================
// ENHANCED PAGE DESIGNS WITH PREVIEW (HTML only) - REMOVED COMPLEX PATTERNS
// ==============================
const PAGE_DESIGNS = {
  classic: { label: 'Classic', icon: '📄', continuous: false, preview: 'border border-gray-300 bg-white' },
  modern: { label: 'Modern Header', icon: '🎨', continuous: false, preview: 'border-t-4 border-indigo-500 bg-gradient-to-r from-gray-50 to-white' },
  frame: { label: 'Elegant Frame', icon: '🖼️', continuous: false, preview: 'border-2 border-amber-400 p-2 bg-amber-50' },
  topbottom: { label: 'Top & Bottom', icon: '📏', continuous: false, preview: 'border-t-2 border-b-2 border-indigo-400' },
  corner: { label: 'Geometric', icon: '🔷', continuous: false, preview: 'relative before:absolute before:top-0 before:right-0 before:w-8 before:h-8 before:border-t-2 before:border-r-2 before:border-indigo-400 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-8 after:border-b-2 after:border-l-2 after:border-indigo-400' },
  tech: { label: 'Tech Corners', icon: '⚡', continuous: false, preview: 'relative before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:border-t-2 before:border-l-2 before:border-cyan-400 after:absolute after:bottom-0 after:right-0 after:w-6 after:h-6 after:border-b-2 after:border-r-2 after:border-cyan-400' },
  gradient: { label: 'Gradient', icon: '🌈', continuous: false, preview: 'bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100' },
  minimal: { label: 'Minimal', icon: '⬜', continuous: false, preview: 'bg-white shadow-sm' },
  wave: { label: 'Wave Pattern', icon: '🌊', continuous: false, preview: 'relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-12 before:bg-indigo-100 before:rounded-t-full' },
  shadow: { label: 'Shadow Frame', icon: '🌑', continuous: false, preview: 'shadow-xl shadow-gray-400' },
  watercolor: { label: 'Watercolor', icon: '🎨', continuous: false, preview: 'bg-gradient-to-tr from-blue-100/50 via-purple-100/30 to-pink-100/50' },
  mandala: { label: 'Mandala', icon: '🕉️', continuous: false, preview: 'relative before:absolute before:inset-8 before:border before:border-amber-300 before:rounded-full before:border-dashed after:absolute after:inset-16 after:border after:border-amber-200 after:rounded-full' },
  ribbon: { label: 'Ribbon', icon: '🎀', continuous: false, preview: 'relative before:absolute before:top-4 before:left-0 before:w-16 before:h-8 before:bg-rose-200 before:rounded-r' },
  mountain: { label: 'Mountain Silhouette', icon: '⛰️', continuous: false, preview: 'relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0 before:border-l-[50px] before:border-l-transparent before:border-r-[50px] before:border-r-transparent before:border-b-[80px] before:border-b-emerald-700/20 after:absolute after:bottom-0 after:left-[40%] after:w-0 after:h-0 after:border-l-[40px] after:border-l-transparent after:border-r-[40px] after:border-r-transparent after:border-b-[60px] after:border-b-emerald-600/20' },
  forest: { label: 'Forest Edge', icon: '🌲', continuous: false, preview: 'relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-16 before:bg-gradient-to-t before:from-emerald-800/20 before:to-transparent' },
  cityscape: { label: 'Cityscape', icon: '🏙️', continuous: false, preview: 'relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-12 before:bg-gradient-to-t before:from-gray-700/20 before:to-transparent' },
  spiral: { label: 'Spiral', icon: '🌀', continuous: false, preview: 'relative before:absolute before:inset-4 before:border before:border-indigo-200 before:rounded-full after:absolute after:inset-8 after:border after:border-indigo-300 after:rounded-full' },
  origami: { label: 'Origami', icon: '📄', continuous: false, preview: 'relative before:absolute before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-[40px] before:border-t-indigo-200 before:border-l-[40px] before:border-l-transparent after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0 after:border-b-[40px] after:border-b-indigo-200 after:border-r-[40px] after:border-r-transparent' },
  artDeco: { label: 'Art Deco', icon: '✨', continuous: false, preview: 'border-2 border-amber-500 relative before:absolute before:top-2 before:left-2 before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-amber-400 after:absolute after:bottom-2 after:right-2 after:w-8 after:h-8 after:border-b-2 after:border-r-2 after:border-amber-400' },
  cyberpunk: { label: 'Cyberpunk', icon: '💜', continuous: false, preview: 'border-l-4 border-r-4 border-cyan-400 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-600/10' },
  steampunk: { label: 'Steampunk', icon: '⚙️', continuous: false, preview: 'border-2 border-amber-700 rounded-lg bg-[repeating-linear-gradient(45deg,#d97706_0px,#d97706_1px,transparent_1px,transparent_10px)]' },
  minimalLines: { label: 'Minimal Lines', icon: '📏', continuous: false, preview: 'border-t border-b border-gray-300 py-2' },
  cornerAccents: { label: 'Corner Accents', icon: '🔲', continuous: false, preview: 'relative before:absolute before:top-0 before:left-0 before:w-12 before:h-12 before:border-t-2 before:border-l-2 before:border-indigo-400 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-12 after:border-b-2 after:border-r-2 after:border-indigo-400' },
  borderLayers: { label: 'Border Layers', icon: '📦', continuous: false, preview: 'border border-gray-300 p-2 relative before:absolute before:inset-1 before:border before:border-gray-200' },
  vintage: { label: 'Vintage', icon: '📜', continuous: false, preview: 'bg-amber-50/50 border-2 border-amber-200 rounded-sm shadow-md' },
  modernGeometric: { label: 'Modern Geometric', icon: '🔷', continuous: false, preview: 'relative before:absolute before:w-24 before:h-24 before:bg-indigo-100 before:opacity-30 before:top-0 before:right-0 after:absolute after:w-32 after:h-32 after:bg-purple-100 after:opacity-30 after:bottom-0 after:left-0' },
  abstractFlow: { label: 'Abstract Flow', icon: '〰️', continuous: false, preview: 'relative before:absolute before:w-full before:h-1 before:bg-gradient-to-r before:from-indigo-400 before:via-purple-400 before:to-pink-400 before:top-1/2 before:opacity-30' }
};

// ==============================
// ENHANCED THEMES WITH MORE OPTIONS
// ==============================
const THEMES = {
  modern: {
    headingColor: '#1e293b',
    textColor: '#334155',
    accentColor: '#3b82f6',
    fontFamily: 'font-sans',
    backgroundColor: '#ffffff',
    cardBg: '#f8fafc',
    secondaryColor: '#64748b',
    borderColor: '#e2e8f0',
    linkColor: '#3b82f6',
    codeBg: '#f1f5f9'
  },
  corporate: {
    headingColor: '#111827',
    textColor: '#374151',
    accentColor: '#059669',
    fontFamily: 'font-serif',
    backgroundColor: '#ffffff',
    cardBg: '#f9fafb',
    secondaryColor: '#6b7280',
    borderColor: '#e5e7eb',
    linkColor: '#059669',
    codeBg: '#f3f4f6'
  },
  dark: {
    headingColor: '#f1f5f9',
    textColor: '#cbd5e1',
    accentColor: '#8b5cf6',
    fontFamily: 'font-sans',
    backgroundColor: '#0f172a',
    cardBg: '#1e293b',
    secondaryColor: '#94a3b8',
    borderColor: '#334155',
    linkColor: '#a78bfa',
    codeBg: '#1e293b'
  },
  warm: {
    headingColor: '#78350f',
    textColor: '#92400e',
    accentColor: '#f59e0b',
    fontFamily: 'font-sans',
    backgroundColor: '#fffbeb',
    cardBg: '#fef3c7',
    secondaryColor: '#d97706',
    borderColor: '#fed7aa',
    linkColor: '#f59e0b',
    codeBg: '#fffbeb'
  },
  ocean: {
    headingColor: '#0c4a6e',
    textColor: '#075985',
    accentColor: '#06b6d4',
    fontFamily: 'font-sans',
    backgroundColor: '#ecfeff',
    cardBg: '#cffafe',
    secondaryColor: '#0891b2',
    borderColor: '#a5f3fc',
    linkColor: '#06b6d4',
    codeBg: '#cffafe'
  },
  forest: {
    headingColor: '#14532d',
    textColor: '#166534',
    accentColor: '#22c55e',
    fontFamily: 'font-serif',
    backgroundColor: '#f0fdf4',
    cardBg: '#dcfce7',
    secondaryColor: '#15803d',
    borderColor: '#bbf7d0',
    linkColor: '#22c55e',
    codeBg: '#dcfce7'
  },
  sunset: {
    headingColor: '#9a3412',
    textColor: '#c2410c',
    accentColor: '#f97316',
    fontFamily: 'font-sans',
    backgroundColor: '#fff7ed',
    cardBg: '#ffedd5',
    secondaryColor: '#ea580c',
    borderColor: '#fed7aa',
    linkColor: '#f97316',
    codeBg: '#ffedd5'
  },
  midnight: {
    headingColor: '#e2e8f0',
    textColor: '#cbd5e1',
    accentColor: '#6366f1',
    fontFamily: 'font-mono',
    backgroundColor: '#0f172a',
    cardBg: '#1e1b4b',
    secondaryColor: '#818cf8',
    borderColor: '#2d2b4b',
    linkColor: '#818cf8',
    codeBg: '#1e1b4b'
  },
  rose: {
    headingColor: '#881337',
    textColor: '#9f1239',
    accentColor: '#ec489a',
    fontFamily: 'font-serif',
    backgroundColor: '#fff1f2',
    cardBg: '#ffe4e6',
    secondaryColor: '#db2777',
    borderColor: '#fecdd3',
    linkColor: '#ec489a',
    codeBg: '#ffe4e6'
  },
  neon: {
    headingColor: '#f0f0f0',
    textColor: '#e0e0e0',
    accentColor: '#00ff00',
    fontFamily: 'font-mono',
    backgroundColor: '#0a0a0a',
    cardBg: '#1a1a1a',
    secondaryColor: '#00cc00',
    borderColor: '#00ff00',
    linkColor: '#00ff00',
    codeBg: '#1a1a1a'
  },
  pastel: {
    headingColor: '#6b4e71',
    textColor: '#8b6b8f',
    accentColor: '#b8a9c9',
    fontFamily: 'font-sans',
    backgroundColor: '#fff9fb',
    cardBg: '#fff0f7',
    secondaryColor: '#c9b6d4',
    borderColor: '#e8d9f0',
    linkColor: '#b8a9c9',
    codeBg: '#fff0f7'
  },
  earthy: {
    headingColor: '#5d4037',
    textColor: '#795548',
    accentColor: '#cd853f',
    fontFamily: 'font-serif',
    backgroundColor: '#faf0e6',
    cardBg: '#f5e6d3',
    secondaryColor: '#a67b5b',
    borderColor: '#e6ccb3',
    linkColor: '#cd853f',
    codeBg: '#f5e6d3'
  },
  lavender: {
    headingColor: '#5b21b6',
    textColor: '#6d28d9',
    accentColor: '#8b5cf6',
    fontFamily: 'font-sans',
    backgroundColor: '#faf5ff',
    cardBg: '#f3e8ff',
    secondaryColor: '#a78bfa',
    borderColor: '#ddd6fe',
    linkColor: '#8b5cf6',
    codeBg: '#f3e8ff'
  },
  mint: {
    headingColor: '#065f46',
    textColor: '#047857',
    accentColor: '#10b981',
    fontFamily: 'font-sans',
    backgroundColor: '#ecfdf5',
    cardBg: '#d1fae5',
    secondaryColor: '#34d399',
    borderColor: '#a7f3d0',
    linkColor: '#10b981',
    codeBg: '#d1fae5'
  },
  coral: {
    headingColor: '#9b2c1d',
    textColor: '#b91c1c',
    accentColor: '#f43f5e',
    fontFamily: 'font-sans',
    backgroundColor: '#fff5f5',
    cardBg: '#fee2e2',
    secondaryColor: '#fb7185',
    borderColor: '#fecaca',
    linkColor: '#f43f5e',
    codeBg: '#fee2e2'
  },
  galaxy: {
    headingColor: '#f0f0f0',
    textColor: '#e0e0e0',
    accentColor: '#a855f7',
    fontFamily: 'font-mono',
    backgroundColor: '#1e1b4b',
    cardBg: '#2e2a6e',
    secondaryColor: '#c084fc',
    borderColor: '#4c1d95',
    linkColor: '#a855f7',
    codeBg: '#2e2a6e'
  },
  sakura: {
    headingColor: '#831843',
    textColor: '#9d174d',
    accentColor: '#f472b6',
    fontFamily: 'font-serif',
    backgroundColor: '#fff1f5',
    cardBg: '#ffe4ed',
    secondaryColor: '#f9a8d4',
    borderColor: '#fbcfe8',
    linkColor: '#f472b6',
    codeBg: '#ffe4ed'
  }
};

// ==============================
// ENHANCED TEXT DENSITIES
// ==============================
const TEXT_DENSITIES = {
  compact: {
    label: 'Compact',
    leading: 'leading-snug',
    blockY: 'my-2',
    headingY: 'mt-3 mb-1',
    letterSpacing: 'tracking-tight',
    paragraphSpacing: 'space-y-2',
    paragraphMargin: 'mb-2'
  },
  comfortable: {
    label: 'Comfortable',
    leading: 'leading-normal',
    blockY: 'my-3',
    headingY: 'mt-4 mb-2',
    letterSpacing: 'tracking-normal',
    paragraphSpacing: 'space-y-3',
    paragraphMargin: 'mb-3'
  },
  spacious: {
    label: 'Spacious',
    leading: 'leading-loose',
    blockY: 'my-5',
    headingY: 'mt-6 mb-3',
    letterSpacing: 'tracking-wide',
    paragraphSpacing: 'space-y-5',
    paragraphMargin: 'mb-5'
  },
  airy: {
    label: 'Airy',
    leading: 'leading-relaxed',
    blockY: 'my-6',
    headingY: 'mt-8 mb-4',
    letterSpacing: 'tracking-wider',
    paragraphSpacing: 'space-y-6',
    paragraphMargin: 'mb-6'
  }
};

// ==============================
// ENHANCED PAGE LAYOUTS
// ==============================
const PAGE_LAYOUTS = {
  standard: { label: 'Standard', icon: LayoutTemplate, cols: 1, className: '', description: 'Single column layout' },
  twoColumn: { label: 'Two Columns', icon: Columns, cols: 2, className: 'grid-cols-2 gap-8', description: 'Balanced two columns' },
  threeColumn: { label: 'Three Columns', icon: Grid, cols: 3, className: 'grid-cols-3 gap-6', description: 'Three column grid' },
  magazine: { label: 'Magazine', icon: BookOpen, cols: 2, className: 'grid-cols-2 gap-12', wide: true, description: 'Wide column with margin' },
  sidebar: { label: 'Sidebar', icon: AlignJustify, cols: 2, className: 'grid-cols-[1fr_2fr] gap-8', description: 'Narrow sidebar + main content' },
  asymmetrical: { label: 'Asymmetrical', icon: Frame, cols: 2, className: 'grid-cols-[1.5fr_1fr] gap-8', description: 'Uneven column split' },
  goldenRatio: { label: 'Golden Ratio', icon: Sigma, cols: 2, className: 'grid-cols-[1.618fr_1fr] gap-8', description: 'Golden ratio proportion' },
  wide: { label: 'Wide', icon: Maximize, cols: 1, className: '', wide: true, description: 'Full width content' },
  threeColumnNarrow: { label: 'Three Narrow', icon: Grid, cols: 3, className: 'grid-cols-3 gap-4', description: 'Compact three columns' }
};

// ==============================
// ENHANCED IMAGE LAYOUTS
// ==============================
const IMAGE_LAYOUTS = {
  grid: { label: 'Grid', icon: Grid, cols: 'grid-cols-2 md:grid-cols-3', description: 'Standard grid' },
  stack: { label: 'Stack', icon: Layers, cols: 'grid-cols-1', description: 'Vertical stack' },
  masonry: { label: 'Masonry', icon: Columns, cols: 'grid-cols-2 md:grid-cols-3', masonry: true, description: 'Pinterest-style layout' },
  carousel: { label: 'Carousel', icon: ImageIcon2, cols: 'grid-cols-1', carousel: true, description: 'Horizontal scroll' },
  featured: { label: 'Featured', icon: Sparkles, cols: 'grid-cols-1', featured: true, description: 'Large featured image' },
  collage: { label: 'Collage', icon: LayoutGrid, cols: 'grid-cols-3 md:grid-cols-4', collage: true, description: 'Artistic arrangement' },
  polaroid: { label: 'Polaroid', icon: Camera, cols: 'grid-cols-2 md:grid-cols-3', polaroid: true, description: 'Polaroid-style frames' },
  circle: { label: 'Circle', icon: Target, cols: 'grid-cols-2 md:grid-cols-4', circle: true, description: 'Circular images' },
  bordered: { label: 'Bordered', icon: Square, cols: 'grid-cols-2 md:grid-cols-3', bordered: true, description: 'Images with borders' }
};

// ==============================
// BORDER STYLES CONFIGURATION
// ==============================
const BORDER_STYLES = {
  solid: { label: 'Solid', icon: '—', value: 'solid', className: 'border-solid' },
  dashed: { label: 'Dashed', icon: '- -', value: 'dashed', className: 'border-dashed' },
  dotted: { label: 'Dotted', icon: '···', value: 'dotted', className: 'border-dotted' },
  double: { label: 'Double', icon: '=', value: 'double', className: 'border-double' },
  groove: { label: 'Groove', icon: '▬', value: 'groove', className: 'border-groove' },
  ridge: { label: 'Ridge', icon: '▬', value: 'ridge', className: 'border-ridge' },
  inset: { label: 'Inset', icon: '▯', value: 'inset', className: 'border-inset' },
  outset: { label: 'Outset', icon: '▮', value: 'outset', className: 'border-outset' }
};

const BORDER_WIDTHS = {
  thin: { label: 'Thin', value: '1px', width: 1, className: 'border' },
  medium: { label: 'Medium', value: '2px', width: 2, className: 'border-2' },
  thick: { label: 'Thick', value: '4px', width: 4, className: 'border-4' },
  extra: { label: 'Extra', value: '6px', width: 6, className: 'border-[6px]' },
  double: { label: 'Double', value: '8px', width: 8, className: 'border-[8px]' }
};

const BORDER_CORNERS = {
  sharp: { label: 'Sharp', value: 'rounded-none', className: 'rounded-none' },
  slight: { label: 'Slight', value: 'rounded-sm', className: 'rounded-sm' },
  rounded: { label: 'Rounded', value: 'rounded', className: 'rounded' },
  large: { label: 'Large', value: 'rounded-lg', className: 'rounded-lg' },
  extra: { label: 'Extra', value: 'rounded-xl', className: 'rounded-xl' },
  pill: { label: 'Pill', value: 'rounded-full', className: 'rounded-full' }
};

const BORDER_POSITIONS = {
  all: { label: 'All Sides', icon: '⊞', className: 'border' },
  top: { label: 'Top Only', icon: '⊤', className: 'border-t' },
  bottom: { label: 'Bottom Only', icon: '⊥', className: 'border-b' },
  left: { label: 'Left Only', icon: '⊣', className: 'border-l' },
  right: { label: 'Right Only', icon: '⊢', className: 'border-r' },
  vertical: { label: 'Vertical', icon: '∥', className: 'border-x' },
  horizontal: { label: 'Horizontal', icon: '=', className: 'border-y' },
  topBottom: { label: 'Top & Bottom', icon: '≡', className: 'border-t border-b' },
  leftRight: { label: 'Left & Right', icon: '∥', className: 'border-l border-r' }
};

// ==============================
// SHADOW STYLES
// ==============================
const SHADOW_STYLES = {
  none: { label: 'None', className: 'shadow-none', value: 'none' },
  sm: { label: 'Small', className: 'shadow-sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  md: { label: 'Medium', className: 'shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  lg: { label: 'Large', className: 'shadow-lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
  xl: { label: 'Extra', className: 'shadow-xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
  inner: { label: 'Inner', className: 'shadow-inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' }
};

// ==============================
// BACKGROUND EFFECTS
// ==============================
const BACKGROUND_EFFECTS = {
  none: { label: 'None', className: '' },
  blur: { label: 'Blur', className: 'backdrop-blur-sm', value: 'blur(4px)' },
  blurMd: { label: 'Medium Blur', className: 'backdrop-blur-md', value: 'blur(8px)' },
  blurLg: { label: 'Large Blur', className: 'backdrop-blur-lg', value: 'blur(16px)' },
  grayscale: { label: 'Grayscale', className: 'backdrop-grayscale', value: 'grayscale(100%)' },
  sepia: { label: 'Sepia', className: 'backdrop-sepia', value: 'sepia(100%)' }
};

// ==============================
// ANIMATION STYLES
// ==============================
const ANIMATION_STYLES = {
  none: { label: 'None', className: '', duration: 0 },
  fadeIn: { label: 'Fade In', className: 'animate-fade-in', duration: 300 },
  slideUp: { label: 'Slide Up', className: 'animate-slide-up', duration: 300 },
  slideIn: { label: 'Slide In', className: 'animate-slide-in', duration: 300 },
  zoomIn: { label: 'Zoom In', className: 'animate-zoom-in', duration: 300 },
  bounce: { label: 'Subtle Bounce', className: 'animate-bounce-subtle', duration: 300 },
  pulse: { label: 'Subtle Pulse', className: 'animate-pulse-subtle', duration: 300 },
  shimmer: { label: 'Shimmer', className: 'shimmer-effect', duration: 2000 },
  float: { label: 'Float', className: 'animate-float', duration: 3000 }
};

// ==============================
// FONT SIZES
// ==============================
const FONT_SIZES = {
  sm: { label: 'Small', value: '14px', className: 'text-sm' },
  base: { label: 'Base', value: '16px', className: 'text-base' },
  lg: { label: 'Large', value: '18px', className: 'text-lg' },
  xl: { label: 'Extra Large', value: '20px', className: 'text-xl' }
};

const HEADING_SIZES = {
  sm: { label: 'Small', value: 'text-lg', className: 'text-lg' },
  md: { label: 'Medium', value: 'text-xl', className: 'text-xl' },
  lg: { label: 'Large', value: 'text-2xl', className: 'text-2xl' },
  xl: { label: 'Extra Large', value: 'text-3xl', className: 'text-3xl' }
};

// ==============================
// LETTER SPACING
// ==============================
const LETTER_SPACINGS = {
  tighter: { label: 'Tighter', className: 'tracking-tighter', value: '-0.05em' },
  tight: { label: 'Tight', className: 'tracking-tight', value: '-0.025em' },
  normal: { label: 'Normal', className: 'tracking-normal', value: '0em' },
  wide: { label: 'Wide', className: 'tracking-wide', value: '0.025em' },
  wider: { label: 'Wider', className: 'tracking-wider', value: '0.05em' },
  widest: { label: 'Widest', className: 'tracking-widest', value: '0.1em' }
};

// ==============================
// LINE HEIGHTS
// ==============================
const LINE_HEIGHTS = {
  none: { label: 'None', className: 'leading-none', value: '1' },
  tight: { label: 'Tight', className: 'leading-tight', value: '1.25' },
  snug: { label: 'Snug', className: 'leading-snug', value: '1.375' },
  normal: { label: 'Normal', className: 'leading-normal', value: '1.5' },
  relaxed: { label: 'Relaxed', className: 'leading-relaxed', value: '1.625' },
  loose: { label: 'Loose', className: 'leading-loose', value: '2' }
};

// ==============================
// PDF PAGE DESIGN RENDERER (PDF Compatible - Fixed for all designs)
// ==============================
const PDFPageDesignRenderer = ({ design, color, borderWidth, borderStyle }) => {
  const styles = StyleSheet.create({
    designContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0,
    },
    // Modern Header
    modernHeader: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 12,
      backgroundColor: color,
    },
    // Elegant Frame
    elegantFrame: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      bottom: 12,
      borderWidth: 2,
      borderColor: color,
      borderRadius: 4,
    },
    // Top & Bottom
    topBottomHeader: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 12,
      backgroundColor: color,
    },
    topBottomFooter: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 12,
      backgroundColor: color,
    },
    // Corner
    cornerTopRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 80,
      height: 80,
      backgroundColor: color,
      opacity: 0.3,
    },
    cornerBottomLeft: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 80,
      height: 80,
      backgroundColor: color,
      opacity: 0.3,
    },
    // Tech Corners
    techCornerTL: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 32,
      height: 32,
      borderTopWidth: 4,
      borderLeftWidth: 4,
      borderColor: color,
    },
    techCornerTR: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 32,
      height: 32,
      borderTopWidth: 4,
      borderRightWidth: 4,
      borderColor: color,
    },
    techCornerBL: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 32,
      height: 32,
      borderBottomWidth: 4,
      borderLeftWidth: 4,
      borderColor: color,
    },
    techCornerBR: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderColor: color,
    },
    // Gradient Background
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: color,
      opacity: 0.1,
    },
    // Wave Pattern
    wavePattern: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: color,
      opacity: 0.2,
    },
    // Shadow Frame
    shadowFrame: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'transparent',
    },
    // Watercolor
    watercolorBlob1: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 200,
      height: 200,
      backgroundColor: color,
      opacity: 0.1,
      borderRadius: 100,
    },
    watercolorBlob2: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 250,
      height: 250,
      backgroundColor: color,
      opacity: 0.1,
      borderRadius: 125,
    },
    // Mandala
    mandalaOuter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 160,
      height: 160,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 80,
    },
    mandalaMiddle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 120,
      height: 120,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 60,
    },
    mandalaInner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 40,
    },
    // Ribbon
    ribbonTop: {
      position: 'absolute',
      top: 32,
      left: 0,
      width: 128,
      height: 48,
      backgroundColor: color,
      opacity: 0.3,
    },
    ribbonBottom: {
      position: 'absolute',
      bottom: 32,
      right: 0,
      width: 128,
      height: 48,
      backgroundColor: color,
      opacity: 0.3,
    },
    // Mountain
    mountain: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: color,
      opacity: 0.2,
    },
    // Forest Edge
    forestEdge: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: color,
      opacity: 0.2,
    },
    // Cityscape
    cityscape: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 50,
      backgroundColor: color,
      opacity: 0.2,
    },
    // Spiral
    spiralOuter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 150,
      height: 150,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 75,
    },
    spiralMiddle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 100,
      height: 100,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 50,
    },
    spiralInner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 25,
    },
    // Origami
    origamiCornerTL: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 0,
      height: 0,
      borderTopWidth: 80,
      borderLeftWidth: 80,
      borderTopColor: color,
      borderLeftColor: 'transparent',
      opacity: 0.15,
    },
    origamiCornerBR: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      borderBottomWidth: 80,
      borderRightWidth: 80,
      borderBottomColor: color,
      borderRightColor: 'transparent',
      opacity: 0.15,
    },
    // Art Deco
    artDecoBorder: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
      borderWidth: 2,
      borderColor: color,
    },
    artDecoCornerTL: {
      position: 'absolute',
      top: 30,
      left: 30,
      width: 60,
      height: 60,
      borderTopWidth: 4,
      borderLeftWidth: 4,
      borderColor: color,
    },
    artDecoCornerTR: {
      position: 'absolute',
      top: 30,
      right: 30,
      width: 60,
      height: 60,
      borderTopWidth: 4,
      borderRightWidth: 4,
      borderColor: color,
    },
    artDecoCornerBL: {
      position: 'absolute',
      bottom: 30,
      left: 30,
      width: 60,
      height: 60,
      borderBottomWidth: 4,
      borderLeftWidth: 4,
      borderColor: color,
    },
    artDecoCornerBR: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      width: 60,
      height: 60,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderColor: color,
    },
    // Cyberpunk
    cyberpunkLineTop: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: color,
      opacity: 0.3,
    },
    cyberpunkLineBottom: {
      position: 'absolute',
      bottom: 100,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: color,
      opacity: 0.3,
    },
    // Steampunk
    steampunkGearLarge: {
      position: 'absolute',
      top: 50,
      left: 50,
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: color,
      opacity: 0.3,
    },
    steampunkGearSmall: {
      position: 'absolute',
      bottom: 50,
      right: 50,
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: color,
      opacity: 0.3,
    },
    // Minimal Lines
    minimalLineTop: {
      position: 'absolute',
      top: 30,
      left: 40,
      right: 40,
      height: 1,
      backgroundColor: color,
    },
    minimalLineBottom: {
      position: 'absolute',
      bottom: 30,
      left: 40,
      right: 40,
      height: 1,
      backgroundColor: color,
    },
    // Corner Accents
    cornerAccentTL: {
      position: 'absolute',
      top: 20,
      left: 20,
      width: 60,
      height: 60,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderColor: color,
    },
    cornerAccentBR: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderColor: color,
    },
    // Border Layers
    borderLayerOuter: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      borderWidth: 1,
      borderColor: color,
      opacity: 0.5,
    },
    borderLayerInner: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
      borderWidth: 1,
      borderColor: color,
      opacity: 0.3,
    },
    // Vintage
    vintageBorder: {
      position: 'absolute',
      top: 15,
      left: 15,
      right: 15,
      bottom: 15,
      borderWidth: 2,
      borderColor: color,
      borderRadius: 8,
    },
    vintageLineTop: {
      position: 'absolute',
      top: 50,
      left: 40,
      right: 40,
      height: 1,
      backgroundColor: color,
      opacity: 0.3,
    },
    vintageLineBottom: {
      position: 'absolute',
      bottom: 50,
      left: 40,
      right: 40,
      height: 1,
      backgroundColor: color,
      opacity: 0.3,
    },
    // Modern Geometric
    modernGeometricShape1: {
      position: 'absolute',
      top: '10%',
      right: '5%',
      width: 80,
      height: 80,
      backgroundColor: color,
      opacity: 0.1,
    },
    modernGeometricShape2: {
      position: 'absolute',
      bottom: '15%',
      left: '8%',
      width: 50,
      height: 50,
      backgroundColor: color,
      opacity: 0.1,
    },
    // Abstract Flow
    abstractFlowLine1: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: color,
      opacity: 0.15,
    },
    abstractFlowLine2: {
      position: 'absolute',
      top: '40%',
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: color,
      opacity: 0.1,
    },
    abstractFlowLine3: {
      position: 'absolute',
      top: '60%',
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: color,
      opacity: 0.15,
    },
    abstractFlowLine4: {
      position: 'absolute',
      top: '80%',
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: color,
      opacity: 0.1,
    },
  });

  const renderDesign = () => {
    switch (design) {
      case 'modern':
        return <View style={styles.modernHeader} />;
      case 'frame':
        return <View style={styles.elegantFrame} />;
      case 'topbottom':
        return (
          <>
            <View style={styles.topBottomHeader} />
            <View style={styles.topBottomFooter} />
          </>
        );
      case 'corner':
        return (
          <>
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
          </>
        );
      case 'tech':
        return (
          <>
            <View style={styles.techCornerTL} />
            <View style={styles.techCornerTR} />
            <View style={styles.techCornerBL} />
            <View style={styles.techCornerBR} />
          </>
        );
      case 'gradient':
        return <View style={styles.gradientBackground} />;
      case 'wave':
        return <View style={styles.wavePattern} />;
      case 'shadow':
        return <View style={styles.shadowFrame} />;
      case 'watercolor':
        return (
          <>
            <View style={styles.watercolorBlob1} />
            <View style={styles.watercolorBlob2} />
          </>
        );
      case 'mandala':
        return (
          <>
            <View style={styles.mandalaOuter} />
            <View style={styles.mandalaMiddle} />
            <View style={styles.mandalaInner} />
          </>
        );
      case 'ribbon':
        return (
          <>
            <View style={styles.ribbonTop} />
            <View style={styles.ribbonBottom} />
          </>
        );
      case 'mountain':
        return <View style={styles.mountain} />;
      case 'forest':
        return <View style={styles.forestEdge} />;
      case 'cityscape':
        return <View style={styles.cityscape} />;
      case 'spiral':
        return (
          <>
            <View style={styles.spiralOuter} />
            <View style={styles.spiralMiddle} />
            <View style={styles.spiralInner} />
          </>
        );
      case 'origami':
        return (
          <>
            <View style={styles.origamiCornerTL} />
            <View style={styles.origamiCornerBR} />
          </>
        );
      case 'artDeco':
        return (
          <>
            <View style={styles.artDecoBorder} />
            <View style={styles.artDecoCornerTL} />
            <View style={styles.artDecoCornerTR} />
            <View style={styles.artDecoCornerBL} />
            <View style={styles.artDecoCornerBR} />
          </>
        );
      case 'cyberpunk':
        return (
          <>
            <View style={styles.cyberpunkLineTop} />
            <View style={styles.cyberpunkLineBottom} />
          </>
        );
      case 'steampunk':
        return (
          <>
            <View style={styles.steampunkGearLarge} />
            <View style={styles.steampunkGearSmall} />
          </>
        );
      case 'minimalLines':
        return (
          <>
            <View style={styles.minimalLineTop} />
            <View style={styles.minimalLineBottom} />
          </>
        );
      case 'cornerAccents':
        return (
          <>
            <View style={styles.cornerAccentTL} />
            <View style={styles.cornerAccentBR} />
          </>
        );
      case 'borderLayers':
        return (
          <>
            <View style={styles.borderLayerOuter} />
            <View style={styles.borderLayerInner} />
          </>
        );
      case 'vintage':
        return (
          <>
            <View style={styles.vintageBorder} />
            <View style={styles.vintageLineTop} />
            <View style={styles.vintageLineBottom} />
          </>
        );
      case 'modernGeometric':
        return (
          <>
            <View style={styles.modernGeometricShape1} />
            <View style={styles.modernGeometricShape2} />
          </>
        );
      case 'abstractFlow':
        return (
          <>
            <View style={styles.abstractFlowLine1} />
            <View style={styles.abstractFlowLine2} />
            <View style={styles.abstractFlowLine3} />
            <View style={styles.abstractFlowLine4} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.designContainer}>
      {renderDesign()}
    </View>
  );
};

// ==============================
// WATERMARK CONFIGURATION (Simplified - only text watermark)
// ==============================
const WATERMARK_TYPES = {
  none: { label: 'None', icon: '🚫' },
  text: { label: 'Text', icon: '📝' },
};

const WATERMARK_POSITIONS = {
  center: { label: 'Center', icon: '🎯' },
  topLeft: { label: 'Top Left', icon: '↖️' },
  topRight: { label: 'Top Right', icon: '↗️' },
  bottomLeft: { label: 'Bottom Left', icon: '↙️' },
  bottomRight: { label: 'Bottom Right', icon: '↘️' },
  tile: { label: 'Tile', icon: '🧩' },
  diagonal: { label: 'Diagonal', icon: '📐' }
};

const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1123;
const STORAGE_KEY = 'docbuilder_autosave';
const MAX_HISTORY = 50;

// Custom icons
const CustomMoon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const CustomSun = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const ZoomInIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const ZoomOutIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const ImagesIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

// CSS animations and print styles
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes zoomIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  @keyframes pulseSubtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fade-in { animation: fadeIn var(--animation-duration, 300ms) ease-out; }
  .animate-slide-up { animation: slideUp var(--animation-duration, 300ms) ease-out; }
  .animate-slide-in { animation: slideIn var(--animation-duration, 300ms) ease-out; }
  .animate-zoom-in { animation: zoomIn var(--animation-duration, 300ms) ease-out; }
  .animate-bounce-subtle { animation: bounceSubtle var(--animation-duration, 300ms) ease-in-out; }
  .animate-pulse-subtle { animation: pulseSubtle var(--animation-duration, 300ms) ease-in-out infinite; }
  .animate-rotate-slow { animation: rotateSlow 20s linear infinite; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  
  .shimmer-effect {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }
  
  /* Border styles */
  .border-groove { border-style: groove; }
  .border-ridge { border-style: ridge; }
  .border-inset { border-style: inset; }
  .border-outset { border-style: outset; }
  
  /* Print styles */
  @media print {
    body * {
      visibility: hidden;
    }
    #document-preview, #document-preview * {
      visibility: visible;
    }
    #document-preview {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      box-shadow: none;
    }
    .page {
      page-break-after: always;
      page-break-inside: avoid;
      break-inside: avoid-page;
    }
    .no-print {
      display: none !important;
    }
  }
`;

// ==============================
// PDF DOCUMENT COMPONENT
// ==============================
const PDFDocumentComponent = ({ docTitle, pages, styles, metadata, watermark }) => {
  const borderWidth = BORDER_WIDTHS[styles.borderWidth]?.width || 2;
  const borderStyle = styles.borderStyle || 'solid';
  const pageDesign = styles.pageDesign || 'classic';

  const pdfStyles = StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: styles.backgroundColor || '#ffffff',
      position: 'relative',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: styles.headingColor || '#1e293b',
      borderBottomWidth: styles.showDividers ? 2 : 0,
      borderBottomColor: styles.accentColor || '#3b82f6',
      paddingBottom: 10,
      textAlign: styles.headingAlign === 'text-center' ? 'center' : 
                styles.headingAlign === 'text-right' ? 'right' : 'left',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 20,
      breakInside: 'avoid',
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
      color: styles.headingColor || '#1e293b',
      fontWeight: 'bold',
    },
    content: {
      fontSize: styles.fontSize || 14,
      color: styles.textColor || '#334155',
      lineHeight: 1.5,
      marginBottom: 10,
    },
    divider: {
      width: 48,
      height: 2,
      backgroundColor: styles.accentColor || '#3b82f6',
      marginBottom: 12,
      opacity: 0.5,
    },
    footer: {
      position: 'absolute',
      bottom: 20,
      left: 40,
      right: 40,
      fontSize: 8,
      color: (styles.accentColor || '#3b82f6') + '80',
      textAlign: 'center',
      borderTopWidth: 1,
      borderTopColor: (styles.accentColor || '#3b82f6') + '40',
      paddingTop: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      marginTop: 12,
      marginBottom: 12,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    image: {
      width: 'auto',
      height: 150,
      marginBottom: 8,
      borderRadius: 4,
    },
    imageGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    imageItem: {
      width: '30%',
      marginBottom: 8,
    },
    borderBox: {
      position: 'absolute',
      top: styles.enableBorder ? 8 : 0,
      left: styles.enableBorder ? 8 : 0,
      right: styles.enableBorder ? 8 : 0,
      bottom: styles.enableBorder ? 8 : 0,
      borderWidth: styles.enableBorder ? borderWidth : 0,
      borderColor: styles.borderColor || styles.accentColor,
      borderStyle: borderStyle,
    },
    watermarkText: {
      position: 'absolute',
      fontSize: 40,
      color: (watermark?.color || styles.accentColor) + '1A',
      textAlign: 'center',
    },
    watermarkTile: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
    }
  });

  const formatContentForPDF = (content) => {
    if (!content) return [];
    
    const lines = content.split('\n');
    const elements = [];
    
    lines.forEach((line, index) => {
      if (line.trim() === '') {
        elements.push(<Text key={index} style={{ marginVertical: 4 }}>{'\n'}</Text>);
        return;
      }
      
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listContent = line.trim().substring(2);
        elements.push(
          <View key={index} style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Text style={pdfStyles.content}>• </Text>
            <Text style={pdfStyles.content}>{listContent}</Text>
          </View>
        );
        return;
      }
      
      const numberedMatch = line.match(/^(\d+\.)\s*(.*)/);
      if (numberedMatch) {
        const number = numberedMatch[1];
        const listContent = numberedMatch[2];
        elements.push(
          <View key={index} style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Text style={pdfStyles.content}>{number} </Text>
            <Text style={pdfStyles.content}>{listContent}</Text>
          </View>
        );
        return;
      }
      
      const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const headingText = headingMatch[2];
        const headingSize = level === 1 ? 20 : level === 2 ? 18 : 16;
        elements.push(
          <Text key={index} style={{ ...pdfStyles.content, fontSize: headingSize, fontWeight: 'bold', marginTop: 12, marginBottom: 6 }}>
            {headingText}
          </Text>
        );
        return;
      }
      
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <Text key={index} style={pdfStyles.content}>
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <Text key={i} style={{ fontWeight: 'bold' }}>{part.slice(2, -2)}</Text>;
              }
              return part;
            })}
          </Text>
        );
      } else {
        elements.push(
          <Text key={index} style={pdfStyles.content}>
            {line}
          </Text>
        );
      }
    });
    
    return elements;
  };

  const renderWatermark = () => {
    if (!watermark || watermark.type === 'none') return null;
    
    if (watermark.type === 'text') {
      if (watermark.position === 'tile') {
        return (
          <View style={pdfStyles.watermarkTile}>
            <Text style={[pdfStyles.watermarkText, { fontSize: 30, opacity: 0.05 }]}>
              {watermark.text || 'CONFIDENTIAL'}
            </Text>
          </View>
        );
      }
      let positionStyle = {};
      switch (watermark.position) {
        case 'topLeft':
          positionStyle = { top: 20, left: 20, right: 'auto', bottom: 'auto' };
          break;
        case 'topRight':
          positionStyle = { top: 20, right: 20, left: 'auto', bottom: 'auto' };
          break;
        case 'bottomLeft':
          positionStyle = { bottom: 20, left: 20, top: 'auto', right: 'auto' };
          break;
        case 'bottomRight':
          positionStyle = { bottom: 20, right: 20, top: 'auto', left: 'auto' };
          break;
        default:
          positionStyle = { top: '50%', left: '50%' };
      }
      return (
        <Text 
          style={[
            pdfStyles.watermarkText, 
            { 
              fontSize: watermark.size || 40,
              color: (watermark.color || styles.accentColor) + '1A',
              ...positionStyle
            }
          ]}
        >
          {watermark.text || 'CONFIDENTIAL'}
        </Text>
      );
    }
    return null;
  };

  return (
    <Document>
      {pages.map((page, pageIndex) => (
        <Page key={page.id} size="A4" style={pdfStyles.page}>
          {/* Page Design Renderer */}
          {pageDesign !== 'classic' && pageDesign !== 'minimal' && (
            <PDFPageDesignRenderer 
              design={pageDesign} 
              color={styles.accentColor}
              borderWidth={borderWidth}
              borderStyle={borderStyle}
            />
          )}

          {styles.enableBorder && (
            <View style={pdfStyles.borderBox} />
          )}

          {renderWatermark()}

          {pageIndex === 0 && (
            <Text style={pdfStyles.title}>{docTitle}</Text>
          )}

          {page.sections.map((section) => (
            <View key={section.id} style={pdfStyles.section} wrap={false}>
              <Text style={pdfStyles.heading}>{section.heading}</Text>
              {styles.showDividers && <View style={pdfStyles.divider} />}
              <View>{formatContentForPDF(section.content)}</View>
              
              {section.images && section.images.length > 0 && (
                <View style={pdfStyles.imageContainer}>
                  <View style={pdfStyles.imageGrid}>
                    {section.images.map((img, i) => (
                      <View key={i} style={pdfStyles.imageItem}>
                        <PDFImage 
                          src={img} 
                          style={pdfStyles.image}
                          cache={false}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))}

          {styles.showFooter && (
            <View style={pdfStyles.footer} fixed>
              <Text>{new Date().toLocaleDateString()}</Text>
              <Text>{docTitle}</Text>
              <Text>Page {pageIndex + 1} of {pages.length}</Text>
            </View>
          )}
        </Page>
      ))}
    </Document>
  );
};

// ==============================
// CUSTOM HOOKS
// ==============================
const useZoom = (previewRef) => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const calculateZoom = () => {
      if (previewRef.current) {
        const containerWidth = previewRef.current.offsetWidth - 64;
        const newZoom = Math.min(1, containerWidth / A4_WIDTH_PX);
        setZoom(newZoom);
      }
    };

    calculateZoom();
    window.addEventListener('resize', calculateZoom);
    return () => window.removeEventListener('resize', calculateZoom);
  }, [previewRef]);

  const zoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.1, 0.3));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
  }, []);

  return { zoom, zoomIn, zoomOut, resetZoom };
};

const useAutoSave = (docTitle, pages, styles, metadata) => {
  const [lastSaved, setLastSaved] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasUnsavedChanges) {
        try {
          const saveData = {
            docTitle,
            pages,
            styles,
            metadata,
            timestamp: new Date().toISOString()
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
          setLastSaved(new Date());
          setHasUnsavedChanges(false);
        } catch (err) {
          console.error('Auto-save failed:', err);
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [docTitle, pages, styles, metadata, hasUnsavedChanges]);

  const markChanged = useCallback(() => setHasUnsavedChanges(true), []);
  const loadAutoSave = useCallback(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load auto-save:', e);
    }
    return null;
  }, []);

  const clearAutoSave = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setLastSaved(null);
    setHasUnsavedChanges(false);
  }, []);

  return { lastSaved, hasUnsavedChanges, markChanged, loadAutoSave, clearAutoSave };
};

const useHistory = (initialState) => {
  const [history, setHistory] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pushState = useCallback((newState) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, currentIndex + 1);
      newHistory.push(newState);
      if (newHistory.length > MAX_HISTORY) {
        newHistory.shift();
      }
      return newHistory;
    });
    setCurrentIndex(prev => Math.min(prev + 1, MAX_HISTORY - 1));
  }, [currentIndex]);

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      return history[currentIndex - 1];
    }
    return null;
  }, [currentIndex, history]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(prev => prev + 1);
      return history[currentIndex + 1];
    }
    return null;
  }, [currentIndex, history]);

  return { 
    undo, redo, pushState, 
    canUndo: currentIndex > 0, 
    canRedo: currentIndex < history.length - 1
  };
};

// ==============================
// UTILITY FUNCTIONS
// ==============================
const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const exportToHTML = (docTitle, pages, styles, metadata, watermark) => {
  const watermarkHtml = watermark && watermark.type !== 'none' ? `
    <div class="watermark" style="
      position: fixed;
      pointer-events: none;
      z-index: 1000;
      ${watermark.position === 'center' ? 'top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg);' : 
        watermark.position === 'topLeft' ? 'top: 20px; left: 20px;' :
        watermark.position === 'topRight' ? 'top: 20px; right: 20px;' :
        watermark.position === 'bottomLeft' ? 'bottom: 20px; left: 20px;' :
        watermark.position === 'bottomRight' ? 'bottom: 20px; right: 20px;' : 'top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg);'}
      color: ${watermark.color || styles.accentColor};
      font-size: ${watermark.size || 40}px;
      opacity: ${watermark.opacity || 0.1};
      white-space: nowrap;
      font-weight: bold;
      text-transform: uppercase;
    ">
      ${watermark.text || 'CONFIDENTIAL'}
    </div>
  ` : '';

  return `<!DOCTYPE html>
  <html>
  <head>
    <title>${docTitle}</title>
    <meta charset="UTF-8">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: ${styles.fontFamily?.replace('font-', '') || 'sans-serif'}; 
        color: ${styles.textColor}; 
        background: ${styles.backgroundColor};
        line-height: 1.6;
      }
      .page {
        width: 210mm;
        min-height: 297mm;
        margin: 0 auto;
        padding: 20mm;
        position: relative;
        background: ${styles.backgroundColor};
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        margin-bottom: 20px;
        page-break-after: always;
      }
      h1 { 
        color: ${styles.headingColor};
        font-size: 2rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid ${styles.accentColor};
        padding-bottom: 0.5rem;
      }
      h2 { 
        color: ${styles.headingColor};
        font-size: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
      }
      .section { 
        margin-bottom: 2rem;
        page-break-inside: avoid;
      }
      .section-content { 
        margin-bottom: 1rem;
        white-space: pre-wrap;
      }
      img { 
        max-width: 100%; 
        margin: 1rem 0; 
        border-radius: 4px;
      }
      .footer {
        margin-top: 3rem;
        padding-top: 1rem;
        border-top: 1px solid ${styles.borderColor};
        text-align: center;
        font-size: 0.75rem;
        color: ${styles.secondaryColor};
      }
      .watermark {
        position: fixed;
        pointer-events: none;
        z-index: 1000;
      }
      @media print {
        body { 
          margin: 0; 
          padding: 0; 
        }
        .page {
          margin: 0;
          box-shadow: none;
          page-break-after: always;
        }
        .watermark {
          position: absolute;
        }
      }
    </style>
  </head>
  <body>
    ${watermarkHtml}
    ${pages.map((page, pageIndex) => `
      <div class="page">
        ${pageIndex === 0 ? `<h1>${escapeHtml(docTitle)}</h1>` : ''}
        ${page.sections.map(section => `
          <div class="section">
            <h2>${escapeHtml(section.heading)}</h2>
            <div class="section-content">${escapeHtml(section.content).replace(/\n/g, '<br/>')}</div>
            ${section.images?.map(img => `<img src="${img}" alt="Document image" />`).join('')}
          </div>
        `).join('')}
        <div class="footer">
          <p>Page ${pageIndex + 1} of ${pages.length}</p>
        </div>
      </div>
    `).join('')}
  </body>
  </html>`;
};

const exportToJSON = (docTitle, pages, styles, metadata) => {
  return JSON.stringify({ docTitle, pages, styles, metadata }, null, 2);
};

const exportToTXT = (docTitle, pages) => {
  let text = `${docTitle}\n${'='.repeat(docTitle.length)}\n\n`;
  
  pages.forEach((page, pageIndex) => {
    text += `\n${'='.repeat(50)}\nPAGE ${pageIndex + 1}\n${'='.repeat(50)}\n\n`;
    page.sections.forEach(section => {
      text += `${section.heading}\n${'-'.repeat(section.heading.length)}\n${section.content}\n\n`;
    });
  });
  return text;
};

const escapeHtml = (text) => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const printDocument = (element) => {
  const printWindow = window.open('', '_blank');
  const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
  let styleContent = '';
  styles.forEach(style => {
    if (style.tagName === 'STYLE') {
      styleContent += style.innerHTML;
    }
  });
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Print Document</title>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; padding: 0; background: white; }
        .page { page-break-after: always; }
        @media print {
          .page { page-break-after: always; }
          .no-print { display: none; }
        }
        ${styleContent}
      </style>
    </head>
    <body>
      ${element.outerHTML}
      <script>
        window.onload = () => {
          window.print();
          window.onafterprint = () => window.close();
        };
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
};

// Toast Component
const Toast = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';
  
  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-slide-up`}>
      {type === 'success' ? <CheckSquare size={16} /> : type === 'error' ? <AlertCircle size={16} /> : <Info size={16} />}
      <span className="text-sm">{message}</span>
    </div>
  );
};

// AutoResizeTextarea Component
const AutoResizeTextarea = React.forwardRef(({ value, onChange, placeholder, className, disabled }, ref) => {
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  React.useImperativeHandle(ref, () => textareaRef.current);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      rows={1}
      style={{ overflow: 'hidden', resize: 'none' }}
    />
  );
});

// ImageUploadModal Component
const ImageUploadModal = ({ isOpen, onClose, onUpload, currentLayout, onLayoutChange }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = async (files) => {
    setUploading(true);
    const imageUrls = [];
    for (let file of files) {
      if (file.type.startsWith('image/')) {
        const url = await readFileAsDataURL(file);
        imageUrls.push(url);
      }
    }
    onUpload(imageUrls);
    setUploading(false);
    setSelectedFiles([]);
    setPreviewUrls([]);
    onClose();
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleConfirm = () => {
    if (selectedFiles.length > 0) {
      handleFiles(selectedFiles);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <ImagesIcon size={20} /> Upload Images
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 p-2 bg-gray-50 rounded-lg flex-wrap">
            {Object.entries(IMAGE_LAYOUTS).map(([key, layout]) => (
              <button
                key={key}
                onClick={() => onLayoutChange(key)}
                className={`flex-1 p-2 rounded flex items-center justify-center gap-2 transition-colors ${
                  currentLayout === key 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white border hover:border-indigo-300'
                }`}
                title={layout.description}
              >
                <layout.icon size={16} />
                <span className="text-sm capitalize">{layout.label}</span>
              </button>
            ))}
          </div>

          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-400 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadCloud size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">Click or drag images here</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>

          {previewUrls.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Preview ({previewUrls.length} images)</h4>
              <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                {previewUrls.map((url, i) => (
                  <div key={i} className="relative w-full h-24 border rounded overflow-hidden">
                    <img src={url} alt={`Preview ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <button
                onClick={handleConfirm}
                disabled={uploading}
                className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                {uploading ? <Loader2 size={16} className="animate-spin inline mr-2" /> : <UploadCloud size={16} className="inline mr-2" />}
                Upload {previewUrls.length} Image{previewUrls.length !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==============================
// WATERMARK SETTINGS TAB COMPONENT (Simplified - Text Only)
// ==============================
const WatermarkSettingsTab = ({ watermark, setWatermark, styles }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
        <Stamp size={16} /> Watermark Settings
      </h3>

      <div>
        <label className="text-xs text-gray-500 block mb-1">Watermark Type</label>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(WATERMARK_TYPES).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setWatermark({ ...watermark, type: key })}
              className={`p-2 rounded text-sm flex items-center justify-center gap-1 transition-colors ${
                watermark?.type === key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span className="text-lg">{type.icon}</span>
              <span className="text-xs">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {watermark?.type === 'text' && (
        <>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Watermark Text</label>
            <input
              type="text"
              value={watermark.text || 'CONFIDENTIAL'}
              onChange={(e) => setWatermark({ ...watermark, text: e.target.value })}
              className="w-full p-2 border rounded text-sm"
              placeholder="Enter watermark text"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Text Color</label>
            <input
              type="color"
              value={watermark.color || styles.accentColor}
              onChange={(e) => setWatermark({ ...watermark, color: e.target.value })}
              className="w-full h-10 p-1 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Position</label>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(WATERMARK_POSITIONS).map(([key, pos]) => (
                <button
                  key={key}
                  onClick={() => setWatermark({ ...watermark, position: key })}
                  className={`p-2 rounded text-sm flex items-center justify-center gap-1 ${
                    watermark?.position === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{pos.icon}</span>
                  <span className="text-xs">{pos.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Size (px)</label>
            <input
              type="range"
              min="20"
              max="200"
              step="5"
              value={watermark.size || 40}
              onChange={(e) => setWatermark({ ...watermark, size: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="text-xs text-gray-400 text-center mt-1">{watermark.size || 40}px</div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Opacity (%)</label>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={(watermark.opacity || 10) * 100}
              onChange={(e) => setWatermark({ ...watermark, opacity: parseInt(e.target.value) / 100 })}
              className="w-full"
            />
            <div className="text-xs text-gray-400 text-center mt-1">{Math.round((watermark.opacity || 0.1) * 100)}%</div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Rotation (degrees)</label>
            <input
              type="range"
              min="-45"
              max="45"
              step="5"
              value={watermark.rotation || -30}
              onChange={(e) => setWatermark({ ...watermark, rotation: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="text-xs text-gray-400 text-center mt-1">{watermark.rotation || -30}°</div>
          </div>
        </>
      )}

      <div className="pt-2">
        <button
          onClick={() => setWatermark({ type: 'none', text: 'CONFIDENTIAL', color: styles.accentColor, opacity: 0.1, size: 40, position: 'center', rotation: -30 })}
          className="w-full py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm"
        >
          Remove Watermark
        </button>
      </div>
    </div>
  );
};

// ==============================
// BORDER STYLE TAB COMPONENT
// ==============================
const BorderStyleTab = ({ styles, setStyles }) => {
  return (
    <div className="space-y-4 pt-4 border-t border-gray-200">
      <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
        <Square size={16} /> Border Settings
      </h3>
      
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="enableBorder"
          checked={styles.enableBorder || false}
          onChange={(e) => setStyles({...styles, enableBorder: e.target.checked})}
          className="rounded text-indigo-600"
        />
        <label htmlFor="enableBorder" className="text-sm text-gray-700">Enable Page Border</label>
      </div>

      {styles.enableBorder && (
        <>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Border Style</label>
            <div className="grid grid-cols-4 gap-1">
              {Object.entries(BORDER_STYLES).map(([key, style]) => (
                <button
                  key={key}
                  onClick={() => setStyles({...styles, borderStyle: style.value})}
                  className={`p-2 text-sm rounded border transition-all ${
                    styles.borderStyle === style.value
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-gray-300 hover:border-indigo-400'
                  }`}
                  title={style.label}
                >
                  {style.icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Border Width</label>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(BORDER_WIDTHS).map(([key, width]) => (
                <button
                  key={key}
                  onClick={() => setStyles({...styles, borderWidth: key})}
                  className={`p-2 text-xs rounded border ${
                    styles.borderWidth === key
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-gray-300 hover:border-indigo-400'
                  }`}
                >
                  {width.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Border Corner</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(BORDER_CORNERS).map(([key, corner]) => (
                <button
                  key={key}
                  onClick={() => setStyles({...styles, borderRadius: corner.value})}
                  className={`p-2 text-xs rounded border ${
                    styles.borderRadius === corner.value
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-gray-300 hover:border-indigo-400'
                  }`}
                >
                  {corner.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Border Position</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(BORDER_POSITIONS).map(([key, position]) => (
                <button
                  key={key}
                  onClick={() => setStyles({...styles, borderPosition: key})}
                  className={`p-2 text-sm rounded border flex items-center justify-center gap-1 ${
                    styles.borderPosition === key
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-gray-300 hover:border-indigo-400'
                  }`}
                  title={position.label}
                >
                  <span className="text-lg">{position.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Border Color</label>
            <input
              type="color"
              value={styles.borderColor || styles.accentColor || '#3b82f6'}
              onChange={(e) => setStyles({...styles, borderColor: e.target.value})}
              className="w-full h-10 p-1 rounded cursor-pointer border border-gray-300"
            />
          </div>
        </>
      )}
    </div>
  );
};

// ==============================
// ENHANCED STYLE PREVIEW COMPONENT
// ==============================
const StylePreviewCard = ({ styleName, styleValue, icon, onSelect, isSelected }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-2 rounded-lg border-2 transition-all ${isSelected ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-200 hover:border-indigo-300'}`}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <div className="flex-1 text-left">
          <div className="text-sm font-medium">{styleName}</div>
          {styleValue && <div className="text-xs text-gray-500 truncate">{styleValue}</div>}
        </div>
        {isSelected && <CheckSquare size={14} className="text-indigo-600" />}
      </div>
    </button>
  );
};

// ==============================
// ADVANCED STYLE TAB COMPONENT
// ==============================
const AdvancedStyleTab = ({ styles, setStyles, onApplyTheme, pageDesigns }) => {
  const [showBorderSettings, setShowBorderSettings] = useState(false);
  const [showShadowSettings, setShowShadowSettings] = useState(false);
  const [showBackgroundEffects, setShowBackgroundEffects] = useState(false);
  const [showAnimationSettings, setShowAnimationSettings] = useState(false);
  const [showTypographyAdvanced, setShowTypographyAdvanced] = useState(false);

  return (
    <div className="space-y-6">
      {/* Shadow Settings */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => setShowShadowSettings(!showShadowSettings)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold text-gray-800"
        >
          <span className="flex items-center gap-2"><Box size={16} /> Shadow Effects</span>
          {showShadowSettings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        
        {showShadowSettings && (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Box Shadow</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(SHADOW_STYLES).map(([key, shadow]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, boxShadow: shadow.className})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.boxShadow === shadow.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {shadow.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-400 italic">Shadow appears around the document</div>
          </div>
        )}
      </div>

      {/* Background Effects */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => setShowBackgroundEffects(!showBackgroundEffects)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold text-gray-800"
        >
          <span className="flex items-center gap-2"><Palette size={16} /> Background Effects</span>
          {showBackgroundEffects ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        
        {showBackgroundEffects && (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Background Blur</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(BACKGROUND_EFFECTS).map(([key, effect]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, backgroundBlur: effect.className})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.backgroundBlur === effect.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {effect.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Background Opacity</label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5"
                value={styles.backgroundOpacity || 100}
                onChange={(e) => setStyles({...styles, backgroundOpacity: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-xs text-gray-400 text-center mt-1">{styles.backgroundOpacity || 100}%</div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Gradient Direction</label>
              <select 
                value={styles.gradientDirection || 'to-r'} 
                onChange={(e) => setStyles({...styles, gradientDirection: e.target.value})}
                className="w-full p-2 border rounded bg-white text-sm"
              >
                <option value="to-r">Horizontal →</option>
                <option value="to-l">Horizontal ←</option>
                <option value="to-b">Vertical ↓</option>
                <option value="to-t">Vertical ↑</option>
                <option value="to-br">Diagonal ↘</option>
                <option value="to-bl">Diagonal ↙</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="useGradient"
                checked={styles.useGradient || false}
                onChange={(e) => setStyles({...styles, useGradient: e.target.checked})}
                className="rounded text-indigo-600"
              />
              <label htmlFor="useGradient" className="text-sm text-gray-600">Enable gradient background</label>
            </div>
            {styles.useGradient && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Gradient Start</label>
                  <input 
                    type="color" 
                    value={styles.gradientStart || styles.backgroundColor || '#ffffff'} 
                    onChange={(e) => setStyles({...styles, gradientStart: e.target.value})} 
                    className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Gradient End</label>
                  <input 
                    type="color" 
                    value={styles.gradientEnd || styles.accentColor || '#3b82f6'} 
                    onChange={(e) => setStyles({...styles, gradientEnd: e.target.value})} 
                    className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Animation Settings */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => setShowAnimationSettings(!showAnimationSettings)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold text-gray-800"
        >
          <span className="flex items-center gap-2"><Sparkles size={16} /> Animations</span>
          {showAnimationSettings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        
        {showAnimationSettings && (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Animation Type</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(ANIMATION_STYLES).map(([key, anim]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, animation: anim.className, animationDuration: anim.duration})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.animation === anim.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {anim.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Animation Duration (ms)</label>
              <input 
                type="range" 
                min="100" 
                max="1000" 
                step="50"
                value={styles.animationDuration || 300}
                onChange={(e) => setStyles({...styles, animationDuration: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-xs text-gray-400 text-center mt-1">{styles.animationDuration || 300}ms</div>
            </div>
          </div>
        )}
      </div>

      {/* Advanced Typography */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => setShowTypographyAdvanced(!showTypographyAdvanced)}
          className="w-full flex items-center justify-between py-2 text-sm font-bold text-gray-800"
        >
          <span className="flex items-center gap-2"><Type size={16} /> Advanced Typography</span>
          {showTypographyAdvanced ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        
        {showTypographyAdvanced && (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Letter Spacing</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(LETTER_SPACINGS).map(([key, spacing]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, letterSpacing: spacing.className})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.letterSpacing === spacing.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {spacing.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Line Height</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(LINE_HEIGHTS).map(([key, height]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, lineHeight: height.className})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.lineHeight === height.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {height.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Font Size</label>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(FONT_SIZES).map(([key, size]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, fontSize: parseInt(size.value), fontSizeClass: size.className})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.fontSizeClass === size.className
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Heading Size</label>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(HEADING_SIZES).map(([key, size]) => (
                  <button
                    key={key}
                    onClick={() => setStyles({...styles, headingSize: size.value})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.headingSize === size.value
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Text Transform</label>
              <div className="grid grid-cols-4 gap-2">
                {['normal-case', 'uppercase', 'lowercase', 'capitalize'].map(transform => (
                  <button
                    key={transform}
                    onClick={() => setStyles({...styles, textTransform: transform})}
                    className={`p-2 text-xs rounded border text-center ${
                      styles.textTransform === transform
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {transform.replace('-case', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Border Settings Toggle */}
      <div className="pt-2">
        <button
          onClick={() => setShowBorderSettings(!showBorderSettings)}
          className="w-full py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <Square size={14} />
          {showBorderSettings ? 'Hide Border Settings' : 'Show Border Settings'}
          {showBorderSettings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {showBorderSettings && (
        <BorderStyleTab styles={styles} setStyles={setStyles} />
      )}

      {/* Custom CSS */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Code size={16} /> Custom CSS
        </h3>
        <textarea
          value={styles.customCSS || ''}
          onChange={(e) => setStyles({...styles, customCSS: e.target.value})}
          placeholder="Add custom CSS styles here..."
          className="w-full p-2 border rounded bg-gray-50 font-mono text-xs min-h-[100px]"
        />
        <p className="text-xs text-gray-400">Custom CSS will be applied to the document preview</p>
      </div>

      {/* Reset Styles */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            if (window.confirm('Reset all styles to default?')) {
              setStyles({
                fontFamily: 'font-sans',
                headingColor: '#1e293b',
                textColor: '#334155',
                headingSize: 'text-xl',
                headingAlign: 'text-left',
                textAlign: 'text-left',
                accentColor: '#3b82f6',
                secondaryColor: '#64748b',
                borderColor: '#e2e8f0',
                showDividers: true,
                columns: 1,
                pageBorder: false,
                showFooter: true,
                textDensity: 'comfortable',
                pageDesign: 'classic',
                backgroundColor: '#ffffff',
                cardBg: '#f8fafc',
                fontSize: 16,
                enableBorder: false,
                borderStyle: 'solid',
                borderWidth: 'medium',
                borderRadius: 'rounded-none',
                borderPosition: 'all',
                boxShadow: 'shadow-none',
                backgroundBlur: '',
                backgroundOpacity: 100,
                letterSpacing: 'tracking-normal',
                lineHeight: 'leading-normal',
                textTransform: 'normal-case',
                animation: 'none',
                animationDuration: 300
              });
            }
          }}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
        >
          Reset All Styles
        </button>
      </div>
    </div>
  );
};

// ==============================
// ENHANCED STYLE TAB COMPONENT
// ==============================
const EnhancedStyleTab = ({ styles, setStyles, onApplyTheme, pageDesigns, setPageLayout, pageLayout, autoSaveEnabled, setAutoSaveEnabled }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Styles */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Palette size={16} /> Themes
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(THEMES).map(themeKey => (
            <StylePreviewCard
              key={themeKey}
              styleName={themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
              icon={themeKey === 'dark' ? '🌙' : themeKey === 'modern' ? '✨' : themeKey === 'corporate' ? '💼' : '🎨'}
              onSelect={() => onApplyTheme(themeKey)}
              isSelected={false}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <LayoutTemplate size={16} /> Page Layout
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(PAGE_LAYOUTS).map(layoutKey => {
            const layout = PAGE_LAYOUTS[layoutKey];
            return (
              <button
                key={layoutKey}
                onClick={() => setPageLayout(layoutKey)}
                className={`p-2 border rounded text-xs transition-colors text-left flex items-center gap-2 ${
                  pageLayout === layoutKey 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                    : 'hover:bg-gray-50'
                }`}
                title={layout.description}
              >
                {React.createElement(layout.icon, { size: 14 })}
                <span>{layout.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Layers size={16} /> Page Design
        </h3>
        <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-1">
          {Object.keys(pageDesigns).map(designKey => {
            const design = pageDesigns[designKey];
            return (
              <button
                key={designKey}
                onClick={() => setStyles({...styles, pageDesign: designKey})}
                className={`p-2 border rounded text-xs transition-colors text-left hover:shadow-md ${
                  styles.pageDesign === designKey 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{design.icon}</span>
                  <span className="text-xs font-medium">{design.label}</span>
                </div>
                <div className={`mt-1 h-8 w-full rounded ${design.preview} opacity-60`} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Type size={16} /> Typography
        </h3>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Font Family</label>
          <select 
            value={styles.fontFamily} 
            onChange={(e) => setStyles({...styles, fontFamily: e.target.value})}
            className="w-full p-2 border rounded bg-white text-sm"
          >
            <option value="font-sans">Sans Serif</option>
            <option value="font-serif">Serif</option>
            <option value="font-mono">Monospace</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">Text Density</label>
          <div className="grid grid-cols-4 gap-2">
            {Object.keys(TEXT_DENSITIES).map(key => (
              <button
                key={key}
                onClick={() => setStyles({...styles, textDensity: key})}
                className={`p-2 text-xs rounded border text-center ${
                  styles.textDensity === key
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white border-gray-300 hover:border-indigo-400'
                }`}
              >
                {TEXT_DENSITIES[key].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Heading size={16} /> Heading Style
        </h3>
        <div className="flex gap-1 bg-gray-100 p-1 rounded w-fit">
          <button onClick={() => setStyles({...styles, headingAlign: 'text-left'})} className={`p-2 rounded ${styles.headingAlign === 'text-left' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-200'}`}>
            <AlignLeft size={16} />
          </button>
          <button onClick={() => setStyles({...styles, headingAlign: 'text-center'})} className={`p-2 rounded ${styles.headingAlign === 'text-center' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-200'}`}>
            <AlignCenter size={16} />
          </button>
          <button onClick={() => setStyles({...styles, headingAlign: 'text-right'})} className={`p-2 rounded ${styles.headingAlign === 'text-right' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-200'}`}>
            <AlignRight size={16} />
          </button>
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input 
            type="checkbox" 
            checked={styles.showDividers} 
            onChange={(e) => setStyles({...styles, showDividers: e.target.checked})} 
            className="rounded text-indigo-600" 
          />
          Show dividers under headings
        </label>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-bold text-gray-800">Colors</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Heading Color</label>
            <input 
              type="color" 
              value={styles.headingColor} 
              onChange={(e) => setStyles({...styles, headingColor: e.target.value})} 
              className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Text Color</label>
            <input 
              type="color" 
              value={styles.textColor} 
              onChange={(e) => setStyles({...styles, textColor: e.target.value})} 
              className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Accent Color</label>
            <input 
              type="color" 
              value={styles.accentColor} 
              onChange={(e) => setStyles({...styles, accentColor: e.target.value})} 
              className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Background</label>
            <input 
              type="color" 
              value={styles.backgroundColor} 
              onChange={(e) => setStyles({...styles, backgroundColor: e.target.value})} 
              className="w-full h-9 p-1 rounded cursor-pointer border border-gray-300" 
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input 
            type="checkbox" 
            checked={styles.showFooter} 
            onChange={(e) => setStyles({...styles, showFooter: e.target.checked})} 
            className="rounded text-indigo-600" 
          />
          <Calendar size={14} /> Show Footer
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input 
            type="checkbox" 
            checked={autoSaveEnabled} 
            onChange={(e) => setAutoSaveEnabled(e.target.checked)} 
            className="rounded text-indigo-600" 
          />
          <Save size={14} /> Auto-save
        </label>
      </div>

      {/* Advanced Toggle */}
      <div className="pt-2">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <Settings size={14} />
          {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
          {showAdvanced ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Advanced Options */}
      {showAdvanced && (
        <AdvancedStyleTab
          styles={styles}
          setStyles={setStyles}
          onApplyTheme={onApplyTheme}
          pageDesigns={pageDesigns}
        />
      )}
    </div>
  );
};

// ==============================
// PAGE EDITOR COMPONENT
// ==============================
const PageEditor = ({
  page, pageIndex, totalPages,
  onDeletePage, onDuplicatePage, onAddSection,
  onMoveSection, onUpdateSection, onDeleteSection, onDuplicateSection,
  onRemoveImage, onFileUpload, onPaste,
  onDragOver, onDragLeave, onDrop, dragActiveSection,
  readOnlyMode, onOpenImageModal, imageLayout,
  sectionFileInputRefs
}) => {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Page {pageIndex + 1}</span>
          <span className="text-xs text-gray-400">({page.sections.length} sections)</span>
        </div>
        <div className="flex items-center gap-1">
          {!readOnlyMode && (
            <>
              <button
                onClick={() => onAddSection(page.id)}
                className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                title="Add Section"
              >
                <Plus size={14} />
              </button>
              <button
                onClick={() => onDuplicatePage(page.id)}
                className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Duplicate Page"
              >
                <Copy size={14} />
              </button>
              {totalPages > 1 && (
                <button
                  onClick={() => onDeletePage(page.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete Page"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </>
          )}
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {page.sections.map((section, sectionIndex) => {
          const isDragActive = dragActiveSection === section.id;
          
          return (
            <div
              key={section.id}
              className={`bg-gray-50 p-3 rounded border border-gray-200 group transition-all relative ${
                isDragActive ? 'ring-2 ring-indigo-500 ring-offset-2 bg-indigo-50' : ''
              }`}
              onDragOver={(e) => onDragOver(section.id, e)}
              onDragLeave={onDragLeave}
              onDrop={(e) => onDrop(section.id, e)}
              data-section-id={section.id}
            >
              {isDragActive && (
                <div className="absolute inset-0 bg-indigo-500/10 z-10 rounded flex items-center justify-center">
                  <div className="bg-white px-3 py-1 rounded shadow text-indigo-600 text-xs font-bold flex items-center gap-2">
                    <UploadCloud size={16} /> Drop Images Here
                  </div>
                </div>
              )}

              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400 font-mono">#{sectionIndex + 1}</span>
                  {!readOnlyMode && (
                    <div className="flex flex-col ml-1">
                      <button 
                        onClick={() => onMoveSection(page.id, sectionIndex, 'up')}
                        disabled={sectionIndex === 0}
                        className="text-gray-300 hover:text-gray-600 disabled:opacity-30"
                        title="Move up"
                      >
                        <ChevronUp size={12} />
                      </button>
                      <button 
                        onClick={() => onMoveSection(page.id, sectionIndex, 'down')}
                        disabled={sectionIndex === page.sections.length - 1}
                        className="text-gray-300 hover:text-gray-600 disabled:opacity-30"
                        title="Move down"
                      >
                        <ChevronDown size={12} />
                      </button>
                    </div>
                  )}
                </div>
                {!readOnlyMode && (
                  <div className="flex items-center gap-1">
                    <button title="Duplicate" onClick={() => onDuplicateSection(page.id, section.id)} className="text-gray-400 hover:text-indigo-500 transition-colors p-1">
                      <Copy size={12} />
                    </button>
                    <button title="Delete" onClick={() => onDeleteSection(page.id, section.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Trash2 size={12} />
                    </button>
                  </div>
                )}
              </div>
              
              <input 
                type="text"
                value={section.heading}
                onChange={(e) => onUpdateSection(page.id, section.id, 'heading', e.target.value)}
                disabled={readOnlyMode}
                className="w-full mb-2 p-1.5 bg-white border border-gray-200 rounded text-sm font-semibold focus:border-indigo-400 outline-none disabled:bg-gray-100"
                placeholder="Section Heading"
              />
              
              <AutoResizeTextarea
                value={section.content}
                onChange={(e) => onUpdateSection(page.id, section.id, 'content', e.target.value)}
                onPaste={(e) => onPaste(section.id, e)}
                disabled={readOnlyMode}
                className="w-full p-1.5 bg-white border rounded text-sm focus:border-indigo-400 outline-none disabled:bg-gray-100 font-mono"
                placeholder="Type content... (Supports Markdown: **bold**, - list, # heading, > quote, - [ ] task)"
                style={{ minHeight: '80px' }}
              />
              
              {!readOnlyMode && (
                <>
                  <div className="mt-3 flex items-center gap-2">
                    <button 
                      onClick={() => onOpenImageModal(section.id)}
                      className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded transition-colors"
                    >
                      <ImagesIcon size={12} /> Add Images
                    </button>
                    <input 
                      type="file" 
                      ref={(el) => { sectionFileInputRefs.current[section.id] = el; }}
                      className="hidden" 
                      accept="image/*"
                      multiple
                      onChange={(e) => onFileUpload(section.id, e)}
                    />
                    <button
                      onClick={() => sectionFileInputRefs.current[section.id]?.click()}
                      className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded transition-colors"
                    >
                      <UploadCloud size={12} /> Upload
                    </button>
                  </div>
                  
                  {section.images && section.images.length > 0 && (
                    <div className={`grid ${IMAGE_LAYOUTS[imageLayout]?.cols || 'grid-cols-2 md:grid-cols-3'} gap-2 mt-2`}>
                      {section.images.map((img, i) => (
                        <div key={i} className="relative group w-full h-24 border rounded overflow-hidden hover:shadow-md transition-shadow">
                          <img src={img} alt={`Image ${i+1}`} className="w-full h-full object-cover" />
                          <button 
                            onClick={() => onRemoveImage(section.id, i)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-0.5 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
        
        {!readOnlyMode && page.sections.length === 0 && (
          <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-sm">No sections on this page</p>
            <button
              onClick={() => onAddSection(page.id)}
              className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              + Add First Section
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==============================
// DOCUMENT PREVIEW COMPONENT (Enhanced)
// ==============================
const DocumentPreview = React.forwardRef(({ 
  docTitle, pages, styles, formatContent, pageDesign, textDensity, metadata, imageLayout, pageLayout, watermark
}, ref) => {
  const getImageLayoutClass = () => {
    const layouts = {
      grid: 'grid-cols-2 md:grid-cols-3',
      stack: 'grid-cols-1',
      masonry: 'grid-cols-2 md:grid-cols-3',
      carousel: 'grid-cols-1 overflow-x-auto flex flex-nowrap',
      featured: 'grid-cols-1',
      collage: 'grid-cols-3 md:grid-cols-4',
      polaroid: 'grid-cols-2 md:grid-cols-3',
      circle: 'grid-cols-2 md:grid-cols-4',
      bordered: 'grid-cols-2 md:grid-cols-3'
    };
    return layouts[imageLayout] || layouts.grid;
  };

  const getColumnClass = () => {
    const layouts = {
      standard: 'space-y-6',
      twoColumn: 'grid grid-cols-2 gap-8',
      threeColumn: 'grid grid-cols-3 gap-6',
      magazine: 'grid grid-cols-2 gap-12',
      sidebar: 'grid grid-cols-[1fr_2fr] gap-8',
      asymmetrical: 'grid grid-cols-[1.5fr_1fr] gap-8',
      goldenRatio: 'grid grid-cols-[1.618fr_1fr] gap-8',
      wide: 'space-y-6 max-w-none',
      threeColumnNarrow: 'grid grid-cols-3 gap-4'
    };
    return layouts[pageLayout] || layouts.standard;
  };

  const backgroundStyle = styles.useGradient 
    ? {
        background: `linear-gradient(${styles.gradientDirection || 'to-r'}, ${styles.gradientStart || styles.backgroundColor}, ${styles.gradientEnd || styles.accentColor})`
      }
    : { backgroundColor: styles.backgroundColor };

  const getBorderStyles = () => {
    if (!styles.enableBorder) return {};
    
    const borderWidth = BORDER_WIDTHS[styles.borderWidth]?.width || 2;
    const borderStyle = styles.borderStyle || 'solid';
    const borderColor = styles.borderColor || styles.accentColor;
    
    switch (styles.borderPosition) {
      case 'top':
        return { borderTop: `${borderWidth}px ${borderStyle} ${borderColor}` };
      case 'bottom':
        return { borderBottom: `${borderWidth}px ${borderStyle} ${borderColor}` };
      case 'left':
        return { borderLeft: `${borderWidth}px ${borderStyle} ${borderColor}` };
      case 'right':
        return { borderRight: `${borderWidth}px ${borderStyle} ${borderColor}` };
      case 'vertical':
        return { 
          borderLeft: `${borderWidth}px ${borderStyle} ${borderColor}`,
          borderRight: `${borderWidth}px ${borderStyle} ${borderColor}`
        };
      case 'horizontal':
        return { 
          borderTop: `${borderWidth}px ${borderStyle} ${borderColor}`,
          borderBottom: `${borderWidth}px ${borderStyle} ${borderColor}`
        };
      case 'topBottom':
        return { 
          borderTop: `${borderWidth}px ${borderStyle} ${borderColor}`,
          borderBottom: `${borderWidth}px ${borderStyle} ${borderColor}`
        };
      case 'leftRight':
        return { 
          borderLeft: `${borderWidth}px ${borderStyle} ${borderColor}`,
          borderRight: `${borderWidth}px ${borderStyle} ${borderColor}`
        };
      default:
        return { border: `${borderWidth}px ${borderStyle} ${borderColor}` };
    }
  };

  const getBorderRadiusClass = () => {
    const radiusMap = {
      'rounded-none': '0px',
      'rounded-sm': '2px',
      'rounded': '4px',
      'rounded-lg': '8px',
      'rounded-xl': '12px',
      'rounded-full': '9999px'
    };
    return radiusMap[styles.borderRadius] || '0px';
  };

  const renderWatermark = () => {
    if (!watermark || watermark.type === 'none') return null;

    const getWatermarkPosition = () => {
      const pos = watermark.position || 'center';
      switch (pos) {
        case 'topLeft':
          return { top: '20px', left: '20px', right: 'auto', bottom: 'auto', transform: 'none' };
        case 'topRight':
          return { top: '20px', right: '20px', left: 'auto', bottom: 'auto', transform: 'none' };
        case 'bottomLeft':
          return { bottom: '20px', left: '20px', top: 'auto', right: 'auto', transform: 'none' };
        case 'bottomRight':
          return { bottom: '20px', right: '20px', top: 'auto', left: 'auto', transform: 'none' };
        case 'tile':
          return { top: 0, left: 0, right: 0, bottom: 0, transform: 'none' };
        case 'diagonal':
          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)' };
        default:
          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      }
    };

    if (watermark.type === 'text') {
      const positionStyles = getWatermarkPosition();
      
      if (watermark.position === 'tile') {
        return (
          <div 
            className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${watermark.color || styles.accentColor}20 0px, ${watermark.color || styles.accentColor}20 2px, transparent 2px, transparent 40px)`,
              opacity: watermark.opacity || 0.1
            }}
          />
        );
      }
      
      return (
        <div 
          className="absolute pointer-events-none z-20 whitespace-nowrap font-bold"
          style={{
            ...positionStyles,
            color: watermark.color || styles.accentColor,
            fontSize: `${watermark.size || 40}px`,
            opacity: watermark.opacity || 0.1,
            transform: positionStyles.transform ? `${positionStyles.transform} rotate(${watermark.rotation || -30}deg)` : `rotate(${watermark.rotation || -30}deg)`,
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          {watermark.text || 'CONFIDENTIAL'}
        </div>
      );
    }

    return null;
  };

  const getImageStyle = () => {
    const baseStyle = { maxHeight: '200px', objectFit: 'cover' };
    if (imageLayout === 'circle') {
      return { ...baseStyle, borderRadius: '50%', width: '100%', height: '100%', aspectRatio: '1/1' };
    }
    if (imageLayout === 'polaroid') {
      return { ...baseStyle, border: '1px solid #e2e8f0', padding: '8px', background: 'white', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' };
    }
    if (imageLayout === 'bordered') {
      return { ...baseStyle, border: `2px solid ${styles.accentColor}`, borderRadius: '4px' };
    }
    return baseStyle;
  };

  const getPageDesignClass = () => {
    if (!pageDesign || pageDesign === 'classic') return '';
    return pageDesign.preview || '';
  };

  return (
    <div 
      id="document-preview" 
      ref={ref}
      className={`shadow-2xl ${styles.fontFamily} ${styles.animation || 'none'} ${styles.boxShadow || 'shadow-none'} ${styles.letterSpacing || ''} ${styles.lineHeight || ''} ${styles.textTransform || ''} ${getPageDesignClass()}`}
      style={{ 
        color: styles.textColor,
        ...backgroundStyle,
        fontSize: `${styles.fontSize}px`,
        width: '210mm',
        margin: '0 auto',
        position: 'relative',
        padding: `${styles.pageMargin || 20}mm`,
        opacity: (styles.backgroundOpacity || 100) / 100,
        backdropFilter: styles.backgroundBlur === 'blur-none' ? 'none' : styles.backgroundBlur?.replace('backdrop-', ''),
        '--animation-duration': `${styles.animationDuration || 300}ms`,
        ...getBorderStyles(),
        borderRadius: getBorderRadiusClass()
      }}
    >
      {/* Watermark */}
      {renderWatermark()}
      
      {pages.map((page, pageIndex) => (
        <div 
          key={page.id}
          className={`page relative ${styles.sectionSpacing || 'mb-6'}`}
          style={{
            minHeight: '297mm',
            position: 'relative',
            pageBreakAfter: pageIndex < pages.length - 1 ? 'always' : 'auto',
            breakAfter: pageIndex < pages.length - 1 ? 'page' : 'auto',
            pageBreakInside: 'avoid'
          }}
        >
          {/* Title (only on first page) */}
          {pageIndex === 0 && (
            <div className="mb-8 pb-4 relative z-10" style={{ borderBottom: styles.showDividers ? `2px solid ${styles.accentColor}` : 'none' }}>
              <h1 
                className={`font-bold leading-tight ${styles.headingAlign} ${styles.headingSize}`}
                style={{ 
                  color: styles.headingColor,
                }}
              >
                {docTitle || "Untitled Document"}
              </h1>
              {metadata && (
                <div className="text-xs text-gray-400 mt-2 flex gap-4">
                  <span>Version {metadata.version}</span>
                  <span>Last updated: {new Date(metadata.modified).toLocaleDateString()}</span>
                  {metadata.author && <span>By: {metadata.author}</span>}
                </div>
              )}
            </div>
          )}

          {/* Sections */}
          <div className={`${getColumnClass()} relative z-10`}>
            {page.sections.map((section) => (
              <div key={section.id} className={`break-inside-avoid ${styles.addParagraphSpacing ? TEXT_DENSITIES[styles.textDensity]?.paragraphSpacing : ''}`}>
                <h2 
                  className={`font-bold mb-2 ${styles.headingSize} ${styles.headingAlign}`}
                  style={{ color: styles.headingColor }}
                >
                  {section.heading}
                </h2>
                
                {styles.showDividers && (
                  <div className="h-px w-12 mb-3" style={{ backgroundColor: styles.accentColor, opacity: 0.5 }} />
                )}

                <div className={`leading-relaxed ${styles.textAlign} ${TEXT_DENSITIES[styles.textDensity]?.leading}`}>
                  {formatContent(section.content)}
                </div>

                {section.images?.length > 0 && (
                  <div className={`mt-4 grid ${getImageLayoutClass()} gap-3`}>
                    {section.images.map((img, i) => (
                      <div key={i} className="relative w-full group">
                        <img 
                          src={img} 
                          alt={`Figure ${i+1}`} 
                          className={`w-full rounded shadow-sm transition-all group-hover:scale-105 duration-200`}
                          style={getImageStyle()}
                        />
                        {imageLayout === 'polaroid' && (
                          <div className="text-center text-xs text-gray-500 mt-1">Photo {i+1}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          {styles.showFooter && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-between text-[10px] pt-2 mt-4 z-10" style={{ 
              color: styles.accentColor + '80',
              borderTop: `1px solid ${styles.accentColor}40`,
              paddingLeft: '20mm',
              paddingRight: '20mm'
            }}>
              <span>{new Date().toLocaleDateString()}</span>
              <span>{docTitle}</span>
              <span>Page {pageIndex + 1} of {pages.length}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

DocumentPreview.displayName = 'DocumentPreview';

// ==============================
// MAIN APP COMPONENT (Complete)
// ==============================
export default function App() {
  const [activeTab, setActiveTab] = useState('content');
  const [activeSidebar, setActiveSidebar] = useState('main');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [toast, setToast] = useState(null);
  const [dragActiveSection, setDragActiveSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showWordCount, setShowWordCount] = useState(true);
  const [imageLayout, setImageLayout] = useState('grid');
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [pageLayout, setPageLayout] = useState('standard');
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [showWatermarkSettings, setShowWatermarkSettings] = useState(false);
  const [watermark, setWatermark] = useState({
    type: 'none',
    text: 'CONFIDENTIAL',
    color: '#3b82f6',
    opacity: 0.1,
    size: 40,
    position: 'center',
    rotation: -30
  });

  const [docTitle, setDocTitle] = useState("McGraw-Hill AWS S3 Data Exposure Case Study (2017)");
  const [pages, setPages] = useState([
    {
      id: 1,
      sections: [
        { 
          id: 1, 
          heading: "Introduction", 
          content: "In the digital age, data has become one of the most valuable assets for any organization. However, with the increasing reliance on cloud computing, the risk of data breaches due to misconfigurations has grown significantly. This case study examines the 2017 data breach involving McGraw-Hill Education, a prominent educational publishing company. The breach exposed sensitive student data stored on an Amazon Web Services (AWS) Simple Storage Service (S3) bucket. This report will analyze the incident, its impact, the company's response, and the critical lessons learned, specifically relating the failure to the core security principles of Least Privilege, Defense in Depth, Fail-Safe Defaults, and Separation of Duties.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['introduction', 'case study']
        },
        { 
          id: 2, 
          heading: "What Happened? (The Incident)", 
          content: "In 2017, McGraw-Hill Education suffered a significant data exposure due to a misconfigured cloud server.\n\n**The Discovery:** The breach was discovered by Bob Diachenko, an independent security researcher known for finding exposed databases. He identified an AWS S3 bucket belonging to McGraw-Hill that was left publicly accessible without any password protection.\n\n**The Bucket:** The exposed bucket was named `aleks-data`. ALEKS (Assessment and Learning in Knowledge Spaces) is an AI-powered online learning and assessment tool used by schools and universities across the United States.\n\n**The Cause:** The root cause of the incident was not a sophisticated cyberattack or hacking attempt. It was a simple human error: cloud misconfiguration. The bucket's permissions were set to allow access to 'Authenticated Users' on AWS. A common misconception is that this means only users within the company. In reality, 'Authenticated Users' refers to any individual in the world who has an AWS account, making the data widely accessible.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['incident', 'breach']
        },
        {
          id: 3,
          heading: "Impact of the Breach",
          content: "The exposure of the aleks-data bucket had several serious consequences:\n\n- **Affected Individuals:** The bucket contained the academic records of thousands of students from multiple school districts across the United States.\n- **Type of Data Exposed:** The exposed information was highly sensitive and included:\n  - Student names\n  - Email addresses\n  - Grades and test scores\n  - Detailed learning analytics and academic performance data\n- **Potential Risks:**\n  - Identity Theft: Personal information could be used to commit fraud.\n  - Academic Fraud: Exposure of grades and performance data could be exploited.\n  - Reputational Damage: As a trusted name in education, this breach severely damaged McGraw-Hill's reputation.\n  - Legal Consequences: The company faced potential lawsuits and scrutiny from regulatory bodies.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['impact', 'risk']
        }
      ]
    },
    {
      id: 2,
      sections: [
        {
          id: 4,
          heading: "Response and Recovery",
          content: "Upon being notified by security researcher Bob Diachenko, McGraw-Hill took the following actions:\n\n1. **Immediate Containment:** The company swiftly changed the permissions on the S3 bucket, securing it and blocking public access to prevent further data exposure.\n2. **Investigation:** McGraw-Hill launched an internal investigation to determine the root cause, how long the data had been exposed, and whether any unauthorized access had occurred.\n3. **Notification:** The company began the process of notifying affected school districts and individual students, complying with state and federal data breach notification laws.\n4. **Security Review:** McGraw-Hill initiated a review of their cloud security policies and procedures to implement measures that would prevent similar misconfigurations in the future.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['response', 'recovery']
        },
        {
          id: 5,
          heading: "Lessons Learned - Fail-Safe Defaults",
          content: "**The Principle:** Security mechanisms should deny access by default and only grant access under specific, approved conditions.\n\n**The Failure:** The AWS S3 bucket was configured in a way that made it accessible by default. The person setting it up had to not change the settings to private. This violates the fail-safe concept.\n\n**Lesson Learned:** All cloud storage containers must be configured to 'private' by default as a mandatory policy. Any request to make data public must go through a rigorous approval process. Security should not be an opt-in feature; it must be the baseline.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['fail-safe', 'security']
        },
        {
          id: 6,
          heading: "Lessons Learned - Least Privilege",
          content: "**The Principle:** A user or system should be given only the minimum levels of access necessary to perform its function.\n\n**The Failure:** The bucket was accessible to all 'Authenticated AWS Users.' This is an extremely broad group, granting access to millions of potential users worldwide who had no legitimate need to see the data.\n\n**Lesson Learned:** Access must be granular. If a bucket needs to be shared, it should be shared only with specific, identified IAM roles or user accounts. Granting access to broad groups like 'Everyone' or 'Authenticated Users' is almost never necessary and creates massive risk.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['least-privilege', 'access-control']
        },
        {
          id: 7,
          heading: "Lessons Learned - Defense in Depth",
          content: "**The Principle:** Multiple layers of security controls should be implemented so that if one layer fails, others are in place to prevent or detect a breach.\n\n**The Failure:** The security of the data relied on a single point of failure: the bucket's permission setting. When that setting was misconfigured, there were no other controls to stop the exposure or alert the security team.\n\n**Lesson Learned:** Organizations must implement a layered security approach:\n\n- **Preventive Layer:** Use AWS Service Control Policies (SCPs) to prevent anyone from creating a public bucket.\n- **Detective Layer:** Enable logging (e.g., AWS CloudTrail) and set up automated alerts (e.g., AWS Config) to notify the security team the instant a bucket is made public.\n\nThis would have allowed McGraw-Hill to detect and fix the error in minutes, not months.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['defense-in-depth', 'layered-security']
        }
      ]
    },
    {
      id: 3,
      sections: [
        {
          id: 8,
          heading: "Lessons Learned - Separation of Duties",
          content: "**The Principle:** Critical tasks and privileges should be divided among multiple individuals to prevent fraud and error.\n\n**The Failure:** The incident suggests that a single developer or administrator likely had the power to both create the storage bucket and make it publicly accessible without any oversight or secondary review.\n\n**Lesson Learned:** The person who requests a resource (e.g., a developer needing storage for an app) should not be the same person who approves its security configuration. A separate security or infrastructure team should review and sign off on all changes to production environments and access permissions. This creates a system of checks and balances.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['separation-of-duties', 'oversight']
        },
        {
          id: 9,
          heading: "Conclusion",
          content: "The 2017 McGraw-Hill data breach is a powerful reminder that data security is not just about defending against sophisticated hackers. Often, the biggest vulnerability is simple human error, exacerbated by a lack of foundational security practices. The exposure of thousands of student records was entirely preventable.\n\nThe incident clearly demonstrates the catastrophic failure that occurs when core principles like Fail-Safe Defaults and Least Privilege are not enforced. It highlights the need for Defense in Depth through automated monitoring and the importance of Separation of Duties to provide oversight. For any organization operating in the cloud, the lesson is clear: security must be baked into every process, from initial configuration to ongoing monitoring, or the consequences can be severe.",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: ['conclusion', 'summary']
        }
      ]
    }
  ]);

  const [metadata, setMetadata] = useState({
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
    author: 'Group Members: Abdur Raheem, Shahid, Zain-ul-Abideen, Ahmad Ali',
    version: '1.0',
    tags: ['case-study', 'security', 'aws', 'data-breach']
  });

  const [styles, setStyles] = useState({
    fontFamily: 'font-sans',
    headingColor: '#1e293b', 
    textColor: '#334155', 
    headingSize: 'text-xl',
    headingAlign: 'text-left',
    textAlign: 'text-left',
    accentColor: '#3b82f6', 
    secondaryColor: '#64748b',
    borderColor: '#e2e8f0',
    showDividers: true,
    columns: 1,
    pageBorder: false,
    showFooter: true,
    textDensity: 'comfortable',
    pageDesign: 'classic',
    backgroundColor: '#ffffff',
    cardBg: '#f8fafc',
    fontSize: 16,
    fontSizeClass: 'text-base',
    // Border settings
    enableBorder: false,
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderRadius: 'rounded-none',
    borderPosition: 'all',
    borderColor: '#3b82f6',
    // Shadow settings
    boxShadow: 'shadow-none',
    // Background effects
    backgroundBlur: '',
    backgroundOpacity: 100,
    useGradient: false,
    gradientStart: '#ffffff',
    gradientEnd: '#3b82f6',
    gradientDirection: 'to-r',
    // Typography advanced
    letterSpacing: 'tracking-normal',
    lineHeight: 'leading-normal',
    textTransform: 'normal-case',
    // Animation
    animation: 'none',
    animationDuration: 300,
    // Custom
    customCSS: ''
  });

  const printRef = useRef(null);
  const previewContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const sectionFileInputRefs = useRef({});

  const { zoom, zoomIn, zoomOut, resetZoom } = useZoom(previewContainerRef);
  const { lastSaved, hasUnsavedChanges, markChanged, loadAutoSave, clearAutoSave } = useAutoSave(
    docTitle, pages, styles, metadata
  );
  const { undo, redo, pushState, canUndo, canRedo } = useHistory({ docTitle, pages, styles, metadata });

  // Inject animation styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const allSections = useMemo(() => pages.flatMap(page => page.sections), [pages]);
  
  const filteredPages = useMemo(() => {
    if (!searchQuery) return pages;
    const query = searchQuery.toLowerCase();
    return pages.map(page => ({
      ...page,
      sections: page.sections.filter(section => 
        section.heading.toLowerCase().includes(query) ||
        section.content.toLowerCase().includes(query)
      )
    })).filter(page => page.sections.length > 0);
  }, [pages, searchQuery]);

  const textDensity = TEXT_DENSITIES[styles.textDensity];
  const pageDesign = PAGE_DESIGNS[styles.pageDesign];

  const totalWords = useMemo(() => {
    return allSections.reduce((sum, s) => sum + (s.content?.split(/\s+/).filter(w => w?.length > 0).length || 0), 0);
  }, [allSections]);

  useEffect(() => {
    pushState({ docTitle, pages, styles, metadata });
  }, [docTitle, pages, styles, metadata]);

  useEffect(() => {
    if (autoSaveEnabled) markChanged();
  }, [docTitle, pages, styles, metadata, autoSaveEnabled, markChanged]);

  useEffect(() => {
    setMetadata(prev => ({ ...prev, modified: new Date().toISOString() }));
  }, [pages, docTitle, styles]);

  // Load auto-save on mount
  useEffect(() => {
    if (autoSaveEnabled) {
      const saved = loadAutoSave();
      if (saved) {
        if (window.confirm('Found an auto-saved version from ' + new Date(saved.timestamp).toLocaleString() + '. Load it?')) {
          setDocTitle(saved.docTitle);
          setPages(saved.pages);
          setStyles(prev => ({ ...prev, ...saved.styles }));
          if (saved.metadata) setMetadata(saved.metadata);
          setToast({ message: 'Auto-save loaded', type: 'success' });
        }
      }
    }
  }, [autoSaveEnabled, loadAutoSave]);

  // Page management functions
  const addNewPage = useCallback(() => {
    const newPageId = Date.now();
    const newPage = {
      id: newPageId,
      sections: [
        {
          id: Date.now(),
          heading: "New Section",
          content: "",
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: []
        }
      ]
    };
    
    setPages(prev => [...prev, newPage]);
    setToast({ message: 'New page added', type: 'success' });
  }, []);

  const deletePage = useCallback((pageId) => {
    if (pages.length === 1) {
      setToast({ message: 'Cannot delete the last page', type: 'warning' });
      return;
    }
    if (window.confirm('Are you sure you want to delete this page?')) {
      setPages(prev => prev.filter(p => p.id !== pageId));
      setToast({ message: 'Page deleted', type: 'success' });
    }
  }, [pages.length]);

  const duplicatePage = useCallback((pageId) => {
    const pageToDuplicate = pages.find(p => p.id === pageId);
    if (pageToDuplicate) {
      const newPageId = Date.now();
      const duplicatedSections = pageToDuplicate.sections.map(section => ({
        ...section,
        id: Date.now() + Math.random(),
        heading: `${section.heading} (Copy)`,
        metadata: { ...section.metadata, created: new Date().toISOString(), modified: new Date().toISOString() }
      }));
      
      const newPage = {
        id: newPageId,
        sections: duplicatedSections
      };
      
      const index = pages.findIndex(p => p.id === pageId);
      const newPages = [...pages];
      newPages.splice(index + 1, 0, newPage);
      setPages(newPages);
      setToast({ message: 'Page duplicated', type: 'success' });
    }
  }, [pages]);

  // Section management functions
  const addSectionToPage = useCallback((pageId) => {
    const newSection = {
      id: Date.now(),
      heading: "New Section",
      content: "",
      images: [],
      metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
      tags: []
    };
    
    setPages(prev => prev.map(page => {
      if (page.id === pageId) {
        return { ...page, sections: [...page.sections, newSection] };
      }
      return page;
    }));
    setToast({ message: 'Section added', type: 'success' });
  }, []);

  const deleteSection = useCallback((pageId, sectionId) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      setPages(prev => prev.map(page => {
        if (page.id === pageId) {
          return { ...page, sections: page.sections.filter(s => s.id !== sectionId) };
        }
        return page;
      }));
      setToast({ message: 'Section removed', type: 'success' });
    }
  }, []);

  const duplicateSection = useCallback((pageId, sectionId) => {
    setPages(prev => prev.map(page => {
      if (page.id === pageId) {
        const sectionToDup = page.sections.find(s => s.id === sectionId);
        if (sectionToDup) {
          const newSection = {
            ...sectionToDup,
            id: Date.now(),
            heading: `${sectionToDup.heading} (Copy)`,
            metadata: { ...sectionToDup.metadata, created: new Date().toISOString(), modified: new Date().toISOString() }
          };
          const index = page.sections.findIndex(s => s.id === sectionId);
          const newSections = [...page.sections];
          newSections.splice(index + 1, 0, newSection);
          return { ...page, sections: newSections };
        }
      }
      return page;
    }));
    setToast({ message: 'Section duplicated', type: 'success' });
  }, []);

  const moveSection = useCallback((pageId, sectionIndex, direction) => {
    setPages(prev => prev.map(page => {
      if (page.id === pageId) {
        const newSections = [...page.sections];
        if (direction === 'up' && sectionIndex > 0) {
          [newSections[sectionIndex - 1], newSections[sectionIndex]] = [newSections[sectionIndex], newSections[sectionIndex - 1]];
        } else if (direction === 'down' && sectionIndex < newSections.length - 1) {
          [newSections[sectionIndex + 1], newSections[sectionIndex]] = [newSections[sectionIndex], newSections[sectionIndex + 1]];
        }
        return { ...page, sections: newSections };
      }
      return page;
    }));
  }, []);

  const updateSection = useCallback((pageId, sectionId, field, value) => {
    setPages(prev => prev.map(page => {
      if (page.id === pageId) {
        return {
          ...page,
          sections: page.sections.map(s => s.id === sectionId ? {
            ...s,
            [field]: value,
            metadata: { ...s.metadata, modified: new Date().toISOString() }
          } : s)
        };
      }
      return page;
    }));
  }, []);

  const addImageToSection = useCallback((sectionId, imageUrls) => {
    setPages(prev => prev.map(page => ({
      ...page,
      sections: page.sections.map(s => {
        if (s.id === sectionId) {
          const newImages = Array.isArray(imageUrls) ? [...(s.images || []), ...imageUrls] : [...(s.images || []), imageUrls];
          return { ...s, images: newImages, metadata: { ...s.metadata, modified: new Date().toISOString() } };
        }
        return s;
      })
    })));
  }, []);

  const removeImageFromSection = useCallback((sectionId, imageIndex) => {
    setPages(prev => prev.map(page => ({
      ...page,
      sections: page.sections.map(s => {
        if (s.id === sectionId) {
          const newImages = [...(s.images || [])];
          newImages.splice(imageIndex, 1);
          return { ...s, images: newImages, metadata: { ...s.metadata, modified: new Date().toISOString() } };
        }
        return s;
      })
    })));
  }, []);

  const handleFileUpload = useCallback(async (sectionId, e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imageUrls = [];
      for (const file of files) {
        if (file.type.startsWith('image/')) {
          const url = await readFileAsDataURL(file);
          imageUrls.push(url);
        }
      }
      addImageToSection(sectionId, imageUrls);
      e.target.value = '';
      setToast({ message: `${imageUrls.length} image(s) uploaded`, type: 'success' });
    }
  }, [addImageToSection]);

  const handleOpenImageModal = useCallback((sectionId) => {
    setCurrentSectionId(sectionId);
    setShowImageModal(true);
  }, []);

  const handleImageUpload = useCallback((imageUrls) => {
    if (currentSectionId) {
      addImageToSection(currentSectionId, imageUrls);
      setToast({ message: `${imageUrls.length} image(s) added`, type: 'success' });
    }
    setShowImageModal(false);
  }, [currentSectionId, addImageToSection]);

  const handlePaste = useCallback(async (sectionId, e) => {
    const items = e.clipboardData.items;
    const imageUrls = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault();
        const file = items[i].getAsFile();
        const url = await readFileAsDataURL(file);
        imageUrls.push(url);
      }
    }
    if (imageUrls.length > 0) {
      addImageToSection(sectionId, imageUrls);
      setToast({ message: `${imageUrls.length} image(s) pasted`, type: 'success' });
    }
  }, [addImageToSection]);

  const handleDragOver = useCallback((sectionId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragActiveSection !== sectionId) {
      setDragActiveSection(sectionId);
    }
  }, [dragActiveSection]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveSection(null);
  }, []);

  const handleDrop = useCallback(async (sectionId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveSection(null);
    
    const files = Array.from(e.dataTransfer.files);
    const imageUrls = [];
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const url = await readFileAsDataURL(file);
        imageUrls.push(url);
      }
    }
    if (imageUrls.length > 0) {
      addImageToSection(sectionId, imageUrls);
      setToast({ message: `${imageUrls.length} image(s) dropped`, type: 'success' });
    }
  }, [addImageToSection]);

  const handleSaveProject = useCallback(() => {
    const projectData = { 
      docTitle, 
      pages, 
      styles, 
      metadata,
      watermark,
      exportedAt: new Date().toISOString() 
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projectData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${docTitle.replace(/\s+/g, '_')}_project.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    setToast({ message: 'Project saved!', type: 'success' });
  }, [docTitle, pages, styles, metadata, watermark]);

  const handleLoadProject = useCallback((event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const projectData = JSON.parse(e.target.result);
        if (projectData.docTitle) setDocTitle(projectData.docTitle);
        if (projectData.pages) setPages(projectData.pages);
        if (projectData.styles) setStyles(prev => ({ ...prev, ...projectData.styles }));
        if (projectData.metadata) setMetadata(projectData.metadata);
        if (projectData.watermark) setWatermark(projectData.watermark);
        setErrorMsg(null);
        setToast({ message: 'Project loaded!', type: 'success' });
      } catch (err) {
        setErrorMsg("Invalid project file.");
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }, []);

  const handlePDFDownload = useCallback(() => {
    setShowPDFViewer(true);
    setToast({ message: 'PDF ready for download', type: 'success' });
  }, []);

  const closePDFViewer = useCallback(() => {
    setShowPDFViewer(false);
  }, []);

  const handleExport = useCallback(async (format) => {
    setIsGenerating(true);
    try {
      let blob, filename;
      switch(format) {
        case 'html':
          const html = exportToHTML(docTitle, pages, styles, metadata, watermark);
          blob = new Blob([html], { type: 'text/html' });
          filename = `${docTitle.replace(/\s+/g, '_')}.html`;
          break;
        case 'json':
          const json = exportToJSON(docTitle, pages, styles, metadata);
          blob = new Blob([json], { type: 'application/json' });
          filename = `${docTitle.replace(/\s+/g, '_')}.json`;
          break;
        case 'txt':
          const txt = exportToTXT(docTitle, pages);
          blob = new Blob([txt], { type: 'text/plain' });
          filename = `${docTitle.replace(/\s+/g, '_')}.txt`;
          break;
        default:
          setToast({ message: `Format not supported`, type: 'error' });
          setIsGenerating(false);
          return;
      }
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      setToast({ message: `Exported as ${format.toUpperCase()}!`, type: 'success' });
    } catch (err) {
      console.error('Export error:', err);
      setToast({ message: `Export failed`, type: 'error' });
    } finally {
      setIsGenerating(false);
    }
  }, [docTitle, pages, styles, metadata, watermark]);

  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    setTimeout(() => {
      if (printRef.current) {
        printDocument(printRef.current);
      }
      setIsPrinting(false);
    }, 100);
  }, []);

  const handleReset = useCallback(() => {
    if (window.confirm("Are you sure you want to clear everything?")) {
      setDocTitle("New Document");
      setPages([{
        id: Date.now(),
        sections: [{ 
          id: Date.now(), 
          heading: "Introduction", 
          content: "", 
          images: [],
          metadata: { created: new Date().toISOString(), modified: new Date().toISOString() },
          tags: []
        }]
      }]);
      setMetadata({
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        author: 'User',
        version: '1.0',
        tags: []
      });
      setWatermark({ type: 'none', text: 'CONFIDENTIAL', color: '#3b82f6', opacity: 0.1, size: 40, position: 'center', rotation: -30 });
      clearAutoSave();
      setToast({ message: 'Document reset', type: 'success' });
    }
  }, [clearAutoSave]);

  const applyTheme = useCallback((themeName) => {
    const theme = THEMES[themeName];
    if (theme) {
      setStyles(prev => ({ ...prev, ...theme }));
      setToast({ message: `Applied ${themeName} theme`, type: 'success' });
    }
  }, []);

  const handleUndo = useCallback(() => {
    const previousState = undo();
    if (previousState) {
      setDocTitle(previousState.docTitle);
      setPages(previousState.pages);
      setStyles(prev => ({ ...prev, ...previousState.styles }));
      if (previousState.metadata) setMetadata(previousState.metadata);
      setToast({ message: 'Undo', type: 'info' });
    }
  }, [undo]);

  const handleRedo = useCallback(() => {
    const nextState = redo();
    if (nextState) {
      setDocTitle(nextState.docTitle);
      setPages(nextState.pages);
      setStyles(prev => ({ ...prev, ...nextState.styles }));
      if (nextState.metadata) setMetadata(nextState.metadata);
      setToast({ message: 'Redo', type: 'info' });
    }
  }, [redo]);

  const formatContent = useCallback((text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    const elements = [];

    lines.forEach((line, index) => {
      // Headings
      const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const headingText = headingMatch[2];
        const fontSizeClass = level === 1 ? 'text-xl' : level === 2 ? 'text-lg' : 'text-base';
        
        elements.push(
          <div 
            key={index} 
            className={`font-bold ${fontSizeClass} ${textDensity.headingY}`}
            style={{ color: styles.headingColor }}
          >
            {headingText}
          </div>
        );
        return;
      }

      // Checkbox tasks
      const checkboxMatch = line.match(/^- \[( |x)\]\s*(.+)/i);
      if (checkboxMatch) {
        const isChecked = checkboxMatch[1].toLowerCase() === 'x';
        const label = checkboxMatch[2];
        elements.push(
          <div key={index} className="flex items-start gap-3 my-1 pl-2">
            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${isChecked ? 'bg-indigo-600 border-indigo-600' : 'border-gray-400 bg-white'}`}>
              {isChecked && <div className="w-1.5 h-2.5 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5" />}
            </div>
            <span className={`text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{label}</span>
          </div>
        );
        return;
      }

      // Blockquotes
      if (line.trim().startsWith('> ')) {
        const content = line.trim().substring(2);
        elements.push(
          <div key={index} className={`${textDensity.blockY} p-3 border-l-4 border-indigo-400 bg-indigo-50 rounded-r text-sm text-gray-700 italic`}>
            {content}
          </div>
        );
        return;
      }

      // Horizontal rules
      if (line.trim() === '---' || line.trim() === '***') {
        elements.push(<hr key={index} className={`${textDensity.blockY} border-t border-gray-300`} />);
        return;
      }

      // Bullet lists
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        const parts = content.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <div key={index} className="flex gap-2 my-1 pl-2 text-sm">
            <span className="font-bold text-gray-400">•</span>
            <span>
              {parts.map((part, pIndex) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={pIndex} className="font-bold">{part.slice(2, -2)}</strong>;
                }
                return <span key={pIndex}>{part}</span>;
              })}
            </span>
          </div>
        );
        return;
      }

      // Ordered lists
      const orderedMatch = line.match(/^(\d+\.)\s*(.*)/);
      if (orderedMatch) {
        const number = orderedMatch[1];
        const content = orderedMatch[2];
        elements.push(
          <div key={index} className="flex gap-2 my-1 pl-2 text-sm">
            <span className="font-bold text-gray-500 font-mono">{number}</span>
            <span>{content}</span>
          </div>
        );
        return;
      }

      // Empty lines
      if (line.trim() === '') {
        elements.push(<div key={index} className="h-2" />);
        return;
      }

      // Regular text with inline formatting
      const parts = line.split(/(\*\*.*?\*\*)/g);
      elements.push(
        <div 
          key={index} 
          className={`min-h-[1.5em] w-full my-1 ${textDensity.leading}`}
        >
          {parts.map((part, pIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIndex} className="font-bold">{part.slice(2, -2)}</strong>;
            }
            return <span key={pIndex}>{part}</span>;
          })}
        </div>
      );
    });

    return elements;
  }, [textDensity, styles.headingColor]);

  // ==============================
  // MAIN RENDER
  // ==============================
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-100 flex flex-col md:flex-row font-sans text-gray-900`}>
      {/* Toast Notifications */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Image Upload Modal */}
      <ImageUploadModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        onUpload={handleImageUpload}
        currentLayout={imageLayout}
        onLayoutChange={setImageLayout}
      />

      {/* PDF Viewer Modal */}
      {showPDFViewer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <FileText size={18} /> PDF Preview & Download
              </h3>
              <div className="flex gap-2">
                <PDFDownloadLink
                  document={
                    <PDFDocumentComponent
                      docTitle={docTitle}
                      pages={filteredPages}
                      styles={styles}
                      metadata={metadata}
                      watermark={watermark}
                    />
                  }
                  fileName={`${docTitle.replace(/\s+/g, '_')}.pdf`}
                >
                  {({ blob, url, loading, error }) => (
                    <button
                      disabled={loading}
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                    >
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Download size={16} />
                      )}
                      Download PDF
                    </button>
                  )}
                </PDFDownloadLink>
                <button
                  onClick={closePDFViewer}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <PDFViewer width="100%" height="100%" className="border-0">
                <PDFDocumentComponent
                  docTitle={docTitle}
                  pages={filteredPages}
                  styles={styles}
                  metadata={metadata}
                  watermark={watermark}
                />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-screen overflow-hidden shadow-xl z-10">
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">
            <LayoutTemplate size={20} />
            <span className="hidden sm:inline">DocBuilder Pro</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              title="Undo" 
              onClick={handleUndo}
              disabled={!canUndo}
              className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors disabled:opacity-30"
            >
              <RotateCcw size={14} />
            </button>
            <button 
              title="Redo" 
              onClick={handleRedo}
              disabled={!canRedo}
              className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors disabled:opacity-30"
            >
              <RotateCcw size={14} className="rotate-180" />
            </button>
            
            <button 
              title="Save" 
              onClick={handleSaveProject} 
              className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded"
            >
              <Save size={14} />
            </button>
            <button 
              title="Load" 
              onClick={() => fileInputRef.current.click()} 
              className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded"
            >
              <Upload size={14} />
            </button>
            <button 
              title="New Page" 
              onClick={addNewPage} 
              className="p-1.5 text-purple-600 hover:bg-purple-50 rounded"
            >
              <Plus size={14} />
            </button>
            <button 
              title="Reset" 
              onClick={handleReset} 
              className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={14} />
            </button>
            <input type="file" ref={fileInputRef} className="hidden" accept=".json" onChange={handleLoadProject} />
            
            <button 
              title={readOnlyMode ? "Edit Mode" : "Read-Only Mode"}
              onClick={() => setReadOnlyMode(!readOnlyMode)}
              className={`p-1.5 rounded ${readOnlyMode ? 'text-yellow-600 bg-yellow-50' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {readOnlyMode ? <Lock size={14} /> : <Unlock size={14} />}
            </button>
            
            <button 
              title="Dark Mode"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"
            >
              {isDarkMode ? <CustomSun size={14} /> : <CustomMoon size={14} />}
            </button>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={handlePDFDownload}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-md transition-all"
            >
              <FileText size={14} />
              PDF
            </button>
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 shadow-md transition-all"
            >
              {isPrinting ? <Loader2 size={14} className="animate-spin" /> : <Printer size={14} />}
              Print
            </button>
            <button
              onClick={() => handleExport('html')}
              disabled={isGenerating}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 shadow-md transition-all"
            >
              {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <Code size={14} />}
              HTML
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-2 text-xs flex items-center gap-2 border-b border-red-100">
            <AlertCircle size={12} /> {errorMsg}
          </div>
        )}

        {hasUnsavedChanges && (
          <div className="bg-yellow-50 text-yellow-600 p-2 text-xs text-center border-b border-yellow-100">
            <Loader2 size={12} className="inline animate-spin mr-1" /> Unsaved changes
          </div>
        )}

        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveSidebar('main')}
            className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeSidebar === 'main' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FileText size={14} /> Content
          </button>
          <button 
            onClick={() => setActiveSidebar('style')}
            className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeSidebar === 'style' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Palette size={14} /> Style
          </button>
          <button 
            onClick={() => setActiveSidebar('watermark')}
            className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeSidebar === 'watermark' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Stamp size={14} /> Watermark
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeSidebar === 'main' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in document..."
                  className="w-full pl-9 pr-8 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Document Title
                </label>
                <input 
                  type="text" 
                  value={docTitle} 
                  onChange={(e) => setDocTitle(e.target.value)}
                  disabled={readOnlyMode}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
                />
              </div>

              {showWordCount && totalWords > 0 && (
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-indigo-700 font-medium">📝 Total Words</span>
                    <span className="font-bold text-indigo-800 text-lg">{totalWords.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-indigo-600 mt-1">
                    <span>{pages.length} pages</span>
                    <span>{allSections.length} sections</span>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Pages ({filteredPages.length})
                  </label>
                  {!readOnlyMode && (
                    <button onClick={addNewPage} className="text-purple-600 hover:text-purple-700 text-xs font-medium flex items-center gap-1">
                      <Plus size={12} /> Add Page
                    </button>
                  )}
                </div>
                
                {filteredPages.map((page, pageIndex) => (
                  <PageEditor
                    key={page.id}
                    page={page}
                    pageIndex={pageIndex}
                    totalPages={filteredPages.length}
                    onDeletePage={deletePage}
                    onDuplicatePage={duplicatePage}
                    onAddSection={addSectionToPage}
                    onMoveSection={moveSection}
                    onUpdateSection={updateSection}
                    onDeleteSection={deleteSection}
                    onDuplicateSection={duplicateSection}
                    onRemoveImage={removeImageFromSection}
                    onFileUpload={handleFileUpload}
                    onPaste={handlePaste}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    dragActiveSection={dragActiveSection}
                    readOnlyMode={readOnlyMode}
                    onOpenImageModal={handleOpenImageModal}
                    imageLayout={imageLayout}
                    sectionFileInputRefs={sectionFileInputRefs}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSidebar === 'style' && (
            <EnhancedStyleTab
              styles={styles}
              setStyles={setStyles}
              onApplyTheme={applyTheme}
              pageDesigns={PAGE_DESIGNS}
              setPageLayout={setPageLayout}
              pageLayout={pageLayout}
              autoSaveEnabled={autoSaveEnabled}
              setAutoSaveEnabled={setAutoSaveEnabled}
            />
          )}

          {activeSidebar === 'watermark' && (
            <WatermarkSettingsTab
              watermark={watermark}
              setWatermark={setWatermark}
              styles={styles}
            />
          )}
        </div>
        
        <div className="p-2 border-t border-gray-200 text-[10px] text-center text-gray-400 bg-gray-50">
          DocBuilder Pro • {pages.length} pages • {totalWords} words
        </div>
      </div>

      {/* Preview */}
      <div 
        ref={previewContainerRef}
        className={`flex-1 overflow-hidden relative flex flex-col items-center p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}
      >
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-xs text-gray-600 shadow-sm z-20 flex items-center gap-1 no-print">
          <button onClick={zoomOut} className="hover:bg-gray-100 p-0.5 rounded">
            <ZoomOutIcon size={12} />
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={zoomIn} className="hover:bg-gray-100 p-0.5 rounded">
            <ZoomInIcon size={12} />
          </button>
          <button onClick={resetZoom} className="hover:bg-gray-100 p-0.5 rounded text-[10px]">
            Reset
          </button>
        </div>

        <div className="w-full h-full overflow-y-auto flex justify-center items-start">
          <div 
            style={{ 
              transform: `scale(${zoom})`, 
              transformOrigin: 'top center',
              width: '210mm'
            }}
          >
            <DocumentPreview
              ref={printRef}
              docTitle={docTitle}
              pages={filteredPages}
              styles={styles}
              formatContent={formatContent}
              pageDesign={pageDesign}
              textDensity={textDensity}
              metadata={metadata}
              imageLayout={imageLayout}
              pageLayout={pageLayout}
              watermark={watermark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}