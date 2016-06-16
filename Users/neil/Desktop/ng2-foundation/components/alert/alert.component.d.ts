import { EventEmitter } from '@angular/core';
export declare class AlertComponent {
    type: string;
    closeable: boolean;
    close: EventEmitter<AlertComponent>;
    private closed;
    onClose(): void;
}
