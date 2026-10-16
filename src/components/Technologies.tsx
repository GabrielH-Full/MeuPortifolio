export default function Technologies({ items }: { items: string[] }) {
  return <div className="tech-list">{items.map(item => <span key={item}>{item}</span>)}</div>
}

