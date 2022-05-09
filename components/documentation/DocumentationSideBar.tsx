import { useEffect, useMemo, useState } from "react";
import { Response as SResponse } from "../../pages/api/v1/documentation/allRoutes";

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
    console.log(records);

    // records is mapped to the following
    // interface Record {
    //     path: string;
    //     type: "directory" | "file";
    //     name: string;
    //     children?: Record[];
    // }
    // Render it with recursion and <details>

    return (
        <div>
            {
                records.map(record => {
                    const recursive = (record: SResponse["pages"][0]) => {
                        if (record.children) {
                            return (
                                <details>
                                    <summary>{record.name}</summary>
                                    {record.children.map(recursive)}
                                </details>
                            );
                        } else {
                            return (
                                <details>
                                    <summary>{record.name}</summary>
                                </details>
                            );
                        }
                    }
                    
                    return recursive(record);
                })
            }
        </div>
    );
}
