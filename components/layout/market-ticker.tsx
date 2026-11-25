'use client'
import {useEffect,useRef} from 'react'
const symbols=[{proName:'OANDA:SPX500USD',title:'S&P 500 (CFD)'},{proName:'FOREXCOM:NSXUSD',title:'NASDAQ 100 (CFD)'},{proName:'TSX:TSX',title:'S&P/TSX Composite'},{proName:'OANDA:US30USD',title:'Dow Jones (CFD)'},{proName:'FX_IDC:USDCAD',title:'USD/CAD'},{proName:'OANDA:XAUUSD',title:'Gold (USD)'},{proName:'OANDA:WTICOUSD',title:'WTI Crude Oil (CFD)'}]
export default function MarketTicker(){
 const host=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const node=host.current
  if(!node)return
  const script=document.createElement('script')
  script.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
  script.async=true
  script.type='text/javascript'
  script.text=JSON.stringify({symbols,colorTheme:'light',locale:'en',isTransparent:false,showSymbolLogo:false,displayMode:'regular'})
  node.appendChild(script)
  return ()=>{node.replaceChildren()}
 },[])
 return <section aria-label="Market watch" className="border-b border-[#e5e1d8] bg-white"><div className="tradingview-widget-container"><div ref={host} className="min-h-[46px] overflow-hidden"><div className="tradingview-widget-container__widget"/></div><div className="tradingview-widget-copyright px-4 py-1 text-right text-xs text-[#53616c]"><a href="https://www.tradingview.com/markets/" target="_blank" rel="noopener nofollow noreferrer" className="underline">Market data by TradingView</a> · Quotes may be delayed; CFD quotes may differ from official indices or futures</div></div></section>
}
