import path from 'path';
import React from 'react';
import fs from 'fs';
import Link from 'next/link';

interface HeaderItem {
    type: 'header';
}

interface CodeBlockItem {
    type: 'code';
}

interface Props {
    target: string;
}

export default function DocumentationView(props: Props) {    
    return (
        <p></p>
    )
}
