import { IncomingMessage, ServerResponse } from "http";
import path from "path";
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from "next";

interface Record {
    path: string;
    type: "directory" | "file";
    name: string;
    children?: Record[];
}

export interface Response {
    pages: Record[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
    const allPages: Record[] = [];

    // relative to source root
    const documentationPagesRoot = path.join(__dirname, "../../../../../../pages/documentation", "elixor");

    // recursivly represent all the files and directories in a file structure tree
    const walk = (dir: string): Record[] => {
        const children = fs.readdirSync(dir).map((child) => {
            const childPath = path.join(dir, child);
            const childStat = fs.statSync(childPath);
            const childRecord: Record = {
                path: path.relative(documentationPagesRoot, childPath),
                type: childStat.isDirectory() ? "directory" : "file",
                name: child
            };

            if (childStat.isDirectory()) {
                childRecord.children = walk(childPath);
            }

            return childRecord;
        });

        return children;
    }

    walk(documentationPagesRoot).forEach((child) => {
        allPages.push(child);
    });

    res.status(200).json({
        pages: allPages
    });
}
    