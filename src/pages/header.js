import React from 'react';

const Header = () => (
    //<header id="header">Journal</header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/Entries">Nosso Jornal</a>
            <a class="nav-link text-light" href="/createentry">Nova Notícia</a>
        </div>
    </nav>
);

export default Header;