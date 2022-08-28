// thx https://github.com/loadingio/css-spinner/ :)

import './lds-spinner.css';

export default function Loading(): JSX.Element {
  return (
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}
