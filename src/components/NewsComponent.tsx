import React from 'react';
import { Sections } from '../interfaces/NewsInterface';

const NewsComponent: React.FunctionComponent<Sections> = ({ model, type }) => {
  return (
    <div>
      {type === 'heading' ? <h1>{model?.text}</h1> : null}
      {type === 'paragraph' ? <p>{model?.text}</p> : null}
      {type === 'image' ? <img src={model?.url} alt={model?.altText} /> : null}
      {type === 'list' ? (
        <ul>
          {model?.items?.map((item) => (
            <li>
              <i>{item}</i>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NewsComponent;
