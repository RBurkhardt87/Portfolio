import * as React from 'react';



const ListCard = ({ title, items }) => {
  return (
    <div className="section-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.label && <b>{item.label}</b>}
            {item.href ? (
              <>
                {' '}
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;

  