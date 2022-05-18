import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app')!;

type SectionProps = {
    title: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, title }) => {
        return (
            <>
                <h2>{title}</h2>
                <section>{children}</section>
            </>
        );
};

const Header: FunctionComponent = ({ children }) => {
    return (
        <header>{children}</header>
    );
};
const Footer: FunctionComponent = ({ children }) => {
    return (
        <footer>{children}</footer>
    );
};

const App: FunctionComponent = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

render(
    <App>
        <Header>header</Header>
        <Section title='hello world'>section</Section>
        <Footer>footer</Footer>
    </App>,
    app
);