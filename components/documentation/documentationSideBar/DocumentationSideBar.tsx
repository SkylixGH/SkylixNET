import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Response as SResponse } from "../../../pages/api/v1/documentation/allRoutes";
import styles from "./Styles.module.scss";

export default function DocumentationSideBar() {
    const [records, setRecords] = useState<SResponse["pages"]>([]);

    useEffect(() => {
        setRecords([]);

        fetch("/api/v1/documentation/allRoutes")
            .then(response => response.json())
            .then((data: SResponse) => {
                setRecords(data.pages);
            });
    }, []);

    // TODO: Implement loading bar/spinner

    // records is mapped to the following
    // interface Record {
    //     path: string;
    //     type: "directory" | "file";
    //     name: string;
    //     children?: Record[];
    // }
    // Render it with recursion and <details>

    const recursiveRender = (records: SResponse["pages"], inset: number) => {
        const renderTree = [] as any[];

        records.forEach((record) => {
            if (record.type == 'directory') {
                renderTree.push(
                    <div className={styles.__entries__item}>
                        <span style={{
                            paddingLeft: `${(inset * 20) + 20}px`
                        }}>{ record.name }</span>

                        <div className={styles.__entries__item_body}>
                            { recursiveRender(record.children, inset + 1) }
                        </div>
                    </div>
                );
            } else {
                renderTree.push(
                    <div className={styles.__entries__item}>
                        {console.log(record.path)}
                        <Link href={"/documentation/elixor/" + (record.path.toLowerCase().endsWith("\\index.tsx") 
                            ? record.path.slice(0, -9) 
                            : record.path.slice(0, -4))}
                        >
                            <a>
                                <span style={{
                                    paddingLeft: `${(inset * 20) + 20}px`
                                }}>{ record.name }</span>   
                            </a> 
                        </Link>
                    </div>
                );
            }
        });

        return renderTree;
    };

    return (
        <div className={styles._}>
            <div style={{
                ...(
                    records.length > 0
                        ? { opacity: 0, pointerEvents: "none" }
                        : {}
                )
            }} className={styles.loader}>
                <span />
            </div>

            <div className={styles.__entries__}>{ recursiveRender(records[0]?.children ?? [], 0) }</div>
        </div>
    );
}
