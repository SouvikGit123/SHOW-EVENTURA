import React,{useState} from 'react'
const Faq = ({id,title,description}) => {
    const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(prev => !prev);

  return (
     <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }} className='font-sans'>{title}</h2>
        <button onClick={handleToggle} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? 'X' : '+'}
        </button>
      </div>
      {open && <p style={{ marginTop: '1rem'}} className='font-serif'>{description}</p>}
    </div>
  );
}

export default Faq;