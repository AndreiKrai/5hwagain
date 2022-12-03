import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieListItem({name,id}) {
  return (
    <li>
      <Link to={id}>{name}</Link>
    </li>
  );
}
