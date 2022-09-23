import * as React from 'react';

export default function Header() {
  return (
    <h1 className="p-3 bg-primary text-white">
      {window.location.pathname == '/' ? (
        ''
      ) : (
        <a href="/" className="text-white">
          &#8592;{' '}
        </a>
      )}
      PokeWiki
    </h1>
  );
}
