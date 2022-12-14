import React from 'react';
import { BuscarFrasesContext } from '../Context/ContextBuscarFrases';

const CopySvg = ({ ...props }) => {
  const [colorClipboardSvg, setColorClipboardSvg] = React.useState('#595959');
  const { data } = React.useContext(BuscarFrasesContext);

  React.useEffect(() => {
    setColorClipboardSvg('#595959');
  }, [data]);

  function copyText({ target }) {
    if (target) {
      const quote = target.parentNode.previousElementSibling.innerText;
      const characterName = target.parentNode.innerText;
      const textToBeCopied =
        quote && characterName && `${quote} \n\n${characterName}`;

      if (textToBeCopied !== undefined || null) {
        navigator.clipboard.writeText(textToBeCopied);
        target.style.scale = 1.1;
        setColorClipboardSvg('#6fb774');
      }
    }
  }

  return (
    <svg
      style={{
        alignSelf: 'flex-end',
        position: 'relative',
        top: '2px',
        cursor: 'pointer',
        scale: 0.9,
        transition: '.4s',
      }}
      onClick={copyText}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={colorClipboardSvg}
      className="bi bi-files"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
    </svg>
  );
};

export default CopySvg;
