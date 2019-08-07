"use strict";

export class BufferController {
    private _buffers: Map<string, string> = new Map<string, string>();

    /**
     * UpdateBuffer
     */
    public updateBuffer(documentUri: string, buffer: string) {
        this._buffers.set(documentUri, buffer);
    }

    public getBuffer(documentUri: string): string | undefined {
        return this._buffers.get(documentUri);
    }
}