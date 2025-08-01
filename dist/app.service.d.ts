import { Item, User } from './user';
export declare class AppService {
    getConfig(auth: string): Promise<{
        current_user: {};
        endpoints: {
            draft: string;
            email: string;
            lobbyplayers: string;
            matches: string;
            matches2: string;
            my_draft: string;
            my_items: string;
            my_player: string;
            players: string;
            purchase: string;
            root: string;
            session: string;
            store: string;
            tourneys: string;
            transactions: string;
            view_offers: string;
        };
    }>;
    getItems(player: User): {
        equipped_items: Item[];
        items: {
            cnt: number;
            details: {};
            item_id: string;
        }[];
    };
    equipItem(player: User, item: Item): void;
}
