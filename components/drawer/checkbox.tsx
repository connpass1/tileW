'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Checkbox() {
    const [checked,setChecked] = useState (false);
    const onChange = () => {
        setChecked(!checked)
    }
    const pathname = usePathname()
    useEffect(() => {
        setChecked(false)
 },[pathname])
    return <input
type="checkbox"
id="drawer-toggle"
checked={checked}
        onChange={onChange}
        className="peer sr-only collapse relative"
/>

 }

        
 