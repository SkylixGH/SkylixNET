import { useEffect, useMemo, useState } from "react";
import { Response as SResponse } from "../../pages/api/v1/documentation/allRoutes";

export default function DocumentationSideBar() {
    const [records, setRecords] = useState<SResponse[]>([]);

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

    const Record = (settings: {}) => {
        return (
            
        );
    }

    return (
        <div>
            
        </div>
    );
}
