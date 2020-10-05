/* eslint-disable react/prop-types */
import React from 'react';
import './expertiseItem.css';

export default function ExpertiseItem({
  image, title, color, active, selectElement, number, activeColor,
}) {
  const afterBorderColor = `${color} transparent transparent transparent`;
  const beforeBorderColor = `transparent transparent ${color} transparent`;
  const wrapperBorder = active ? `2px solid ${activeColor}` : '2px solid transparent';
  const animation = active ? 'bounce-vertically 1s ease infinite alternate' : 'none';

  return (
    <div onClick={() => selectElement(number)} aria-hidden="true" className="expertiseItem" style={{ border: wrapperBorder, animation }}>
      <div className="expertiseItem__image-wrapper" style={{ backgroundColor: color }}>
        <div style={{
          borderTopColor: color,
          position: 'relative',
          content: '',
          top: '-9px',
          width: '0',
          height: '0',
          borderStyle: 'solid',
          borderWidth: '0 45px 20px 45px',
          borderColor: beforeBorderColor,
        }}
        />
        <img className="expertiseItem__image" src={image} alt={title} />
        <div style={{
          borderTopColor: color,
          position: 'relative',
          content: '',
          bottom: '-9px',
          width: '0',
          height: '0',
          borderStyle: 'solid',
          borderWidth: '20px 45px 0 45px',
          borderColor: afterBorderColor,
        }}
        />
      </div>
    </div>
  );
}
