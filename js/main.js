/* =========================================================  
   V.15 — main.js  
   Dados + renderização de produtos, vídeos e categorias  
   ========================================================= */  

/* ---------- DADOS DOS PRODUTOS (simulados) ---------- */  
const PRODUTOS = [  
  { id: 1,  nome: "Smartphone X12 Pro 128GB",     preco: 249.90, antigo: 329.90, img: "📱", categoria: "eletronicos", destaque: true },  
  { id: 2,  nome: "Ténis Desportivos Air Run",     preco: 59.99,  antigo: 89.99,  img: "👟", categoria: "moda",        destaque: true },  
  { id: 3,  nome: "Fones Bluetooth Bass+",         preco: 34.50,  antigo: 49.90,  img: "🎧", categoria: "eletronicos", destaque: true },  
  { id: 4,  nome: "Liquidificadora 1200W",         preco: 45.00,  antigo: 65.00,  img: "🍹", categoria: "casa",        destaque: true },  
  { id: 5,  nome: "Relógio Inteligente FitPro",    preco: 79.90,  antigo: 119.90, img: "⌚", categoria: "eletronicos", destaque: true },  
  { id: 6,  nome: "Mochila Impermeável Urban",     preco: 39.90,  antigo: 55.00,  img: "🎒", categoria: "moda",        destaque: true },  
  { id: 7,  nome: "Cadeira Gaming RGB",            preco: 189.00, antigo: 249.00, img: "🪑", categoria: "informatica", destaque: true },  
  { id: 8,  nome: "Kit Skincare Vitamina C",       preco: 24.99,  antigo: 39.90,  img: "🧴", categoria: "beleza",      destaque: true },  
];  

/* ---------- DADOS DAS CATEGORIAS ---------- */  
const CATEGORIAS = [  
  { nome: "Eletrónicos",  icone: "📱", slug: "eletronicos" },  
  { nome: "Moda",         icone: "👕", slug: "moda" },  
  { nome: "Casa & Jardim",icone: "🏠", slug: "casa" },  
  { nome: "Beleza",       icone: "💄", slug: "beleza" },  
  { nome: "Desporto",     icone: "⚽", slug: "desporto" },  
  { nome: "Informática",  icone: "💻", slug: "informatica" },  
  { nome: "Brinquedos",   icone: "🧸", slug: "brinquedos" },  
  { nome: "Ofertas",      icone: "🔥", slug: "ofertas" },  
];  

/* ---------- DADOS DOS VÍDEOS (marketing estilo TikTok) ---------- */  
const VIDEOS = [  
  { id: 1, titulo: "Review Smartphone X12 Pro",   autor: "@techzone",  emoji: "📱", views: "12,4 mil" },  
  { id: 2, titulo: "Unboxing Ténis Air Run",       autor: "@sneakerpt", emoji: "👟", views: "8,1 mil" },  
  { id: 3, titulo: "Teste de som — Bass+",          autor: "@audiophile",emoji: "🎧", views: "5,7 mil" },  
  { id: 4, titulo: "Receita com a Liquidificadora", autor: "@chefCasa",  emoji: "🍹", views: "3,2 mil