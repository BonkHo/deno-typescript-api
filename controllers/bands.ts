import { v4 } from "https://deno.land/std@0.106.0/uuid/mod.ts";
import { Band } from "../types.ts";

let bands: Band[] = [];

const getBands = ({ res }: { res: any }) => {
    res.body = {
        success: true,
        data: bands,
    };
};

const addBand = async ({ req, res }: { req: any; res: any }) => {
    const body = await req.body();

    if (!req.hasBody) {
        res.status = 400;
        res.body = {
            success: false,
            msg: "The request is empty",
        };
    } else {
        const band: Band = body.value;
        band.id = v4.generate();
        bands.push(band);
        res.status = 201;
        res.body = {
            success: true,
            data: band,
        };
    }
};

export { getBands, addBand };
