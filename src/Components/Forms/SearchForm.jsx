import React, { useState, useEffect, useRef } from 'react';
import { Paper, InputBase } from '@mui/material';

const SearchBar = ({ isOpenForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (isOpenForm) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isOpenForm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '100px',
            left: '0',
            width: '100%',
            zIndex: '1000',
            transition: 'transform 0.3s ease-out',
            transform: 'translateY(0)',
          }}
        >
          <Paper
            ref={formRef}
            component="form"
            style={{
              padding: '20px 30px',
              backgroundColor: '#fff',
            }}
            onKeyDown={handleKeyDown}
          >
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              inputRef={inputRef}
              autoFocus
            />
          </Paper>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
