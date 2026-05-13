import * as ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "ftp.bitsolmarketing.com",
            user: "gravity@bitsolmarketing.com",
            password: "Gravity@548548",
            secure: false
        });
        
        console.log("Connected to BITSOL Server...");
        
        // Ensure we are in the public_html directory
        try {
            await client.cd("public_html");
        } catch (e) {
            console.log("Could not find public_html, staying in root.");
        }

        console.log("Starting transmission of BITSOL Production Assets...");
        await client.uploadFromDir(path.join(__dirname, "out"));
        
        console.log("Deployment Successful! BITSOL is now Live.");
    } catch (err) {
        console.error("Deployment failed:", err);
    }
    client.close();
}

deploy();
