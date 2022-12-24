import React from 'react';

export const Head = ({ title, description }) => {
  const metaDesc = document.querySelector("meta[name='description']");

  React.useEffect(() => {
    document.title = 'Anithings - ' + title;
    metaDesc.setAttribute('content', description);

    return () => {
      document.title = 'AniThings';
      metaDesc.setAttribute(
        'content',
        'AniThings é um Aplicativo Web com diversas coisas sobre anime. Identificar animes através de fotos. Gerador de frases de anime. Animes/Mangás mais populares do momento. Tudo isso em apenas um único lugar!',
      );
    };
  }, []);

  return <></>;
};
