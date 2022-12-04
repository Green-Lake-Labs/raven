export enum RavenLoadCommand {
    loadFinancialData,
    loadPriceData,
    loadProfileData,
}

export function parseMessage(message: string): [RavenLoadCommand | null, string] {
    if (message.match(/raven [a-zA-Z].*/)) {
        const chunked = message.split(' ');
        if (chunked.length === 3) {
            const symbol = chunked[2].toUpperCase();
            const command = chunked[1].toLowerCase();
            if (command === 'financial') return [RavenLoadCommand.loadFinancialData, symbol];
            if (command === 'price') return [RavenLoadCommand.loadPriceData, symbol];
            if (command === 'profile') return [RavenLoadCommand.loadProfileData, symbol];
        };
    }
    return [null, ''];
}