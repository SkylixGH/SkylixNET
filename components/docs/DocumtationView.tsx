import React from 'react';

interface HeaderItem {
    type: 'header';
}

interface CodeBlockItem {
    type: 'code';
}

interface Props {
    content: (HeaderItem | CodeBlockItem)[];
}

export default function DocumentationView(props: Props) {
    return (
        <div>
            { props.content.map((item) => {
                switch (item.type) {
                    case 'header':
                        return <h1>{item.type}</h1>;

                    case 'code':
                        return <code>{item.type}</code>;

                    default:
                        return <div>...</div>;
                }
            }) }
        </div>
    );
}
