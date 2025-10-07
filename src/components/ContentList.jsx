import React from 'react'


export default function ContentList({items=[], kind='items', onOpen}){
return (
<div className="content-list">
<table className="list-table">
<thead><tr><th>Date</th><th>Title</th><th>Category</th></tr></thead>
<tbody>
{items.map((it, idx)=> (
<tr key={idx} onClick={()=> onOpen(it)}>
<td>{it.date || ''}</td>
<td className="title-col">{it.title || it.name}</td>
<td>{it.category || it.tech?.join(', ') || ''}</td>
</tr>
))}
</tbody>
</table>
</div>
)
}