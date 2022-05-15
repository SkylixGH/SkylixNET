import path from 'path';
import React, { useEffect, useMemo, useState } from 'react';
import fs from 'fs';
import Link from 'next/link';
import DocumentationSideBar from '../documentationSideBar/DocumentationSideBar';
import styles from "./Styles.module.scss";
import { Response as SResponse } from "../../../pages/api/v1/documentation/allRoutes"

interface HeaderItem {
    type: 'header';
}

interface CodeBlockItem {
    type: 'code';
}

interface Props {
    target: string;
    render?: (r: RenderView) => void;
}

class RenderView {
    private jsxElements: any[] = [];

    public h(id: 1 | 2 | 3 | 4 | 5 | 6, value: string) {
        switch (id) {
            case 1:
                this.jsxElements.push(<h1>{value}</h1>);
                break;
            case 2:
                this.jsxElements.push(<h2>{value}</h2>);
                break;
            case 3:
                this.jsxElements.push(<h3>{value}</h3>);
                break;
            case 4:
                this.jsxElements.push(<h4>{value}</h4>);
                break;
            case 5:
                this.jsxElements.push(<h5>{value}</h5>);
                break;
            case 6:
                this.jsxElements.push(<h6>{value}</h6>);
                break;
        }
    }

    public p(label: string) {
        this.jsxElements.push(<p>{label}</p>);
    }

    public hr() {
        this.jsxElements.push(<hr />);
    }

    public getAll() {
        return this.jsxElements;
    }
}

export default function DocumentationView(props: Props) { 
    const pathCurrent = useMemo(() => {
        if (typeof window === "undefined") return;

        const segments = location.pathname.split('/');
        const documentRouteSegments = segments.splice(2);

        return documentRouteSegments.join('/');
    }, []);
    
    const rendererView = useMemo(() => {
        return new RenderView();
    }, []);
    
    return (
        <div className={styles._}>
            <div className={styles.inner}>
                <DocumentationSideBar />

                <div className={styles.body}>
                    <h1>{props.target}</h1>

                    { (() => {
                        props.render && props.render(rendererView);
                        return rendererView.getAll();
                    })() }
                </div>
            </div>
        </div>
    )
}
