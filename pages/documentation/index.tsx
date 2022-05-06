import Link from 'next/link';
import React from 'react';
import DocumentationView from '../../components/docs/DocumtationView';

export default function Index() {
    const [releaseType, setReleaseType] = React.useState<string>('master');

    return (
        <div>
            <p>Select documentation branch</p>
            <select onChange={
                (e) => {
                    setReleaseType(e.target.value);
                }
            }>
                <option value="master">Master</option>
                <option value="1.0.0-snapshot.1">v1.0.0-SNAPSHOT.1</option>
            </select>

            <h1>Elixor</h1>
            <ul>
                <li>
                    <Link href={'/documentation/elixor/' + releaseType}>Overview</Link>
                </li>

                <li>
                    <Link href={'/documentation/elixor/' + releaseType + '/terminal'}>Terminal</Link>

                    <ul>

                    </ul>
                </li>
            </ul>
        </div>
    );
}
