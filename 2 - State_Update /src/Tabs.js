import { useState } from 'react'

export default function Tabs( { defaultvalue, items }) {
  const [value, setValue] = useState(
    defaultvalue ?? items[0].value)
  return (
    <div>
      <div>
      {items.map(({label, value: itemValue}) => {
        const isActiveValue = value == itemValue
        return(
          <button 
            className={['tab-list-item', 
            isActiveValue && 'tab-list-item-active']
            .filter(Boolean)
            .join(' ')
            }
            onClick={()=> setValue(itemValue)}

          >{label}</button>
        )
      }
  )}
      </div>
      {items.map(({panel, value: itemValue})=>{
        return(
        <div key={itemValue} hidden={itemValue !=value}>
          <p>{panel}</p>
        </div>
        )
      })}
    </div>
  );
}
