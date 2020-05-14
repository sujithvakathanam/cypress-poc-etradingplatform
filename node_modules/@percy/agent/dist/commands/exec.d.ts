import { flags } from '@oclif/command';
import PercyCommand from './percy-command';
export default class Exec extends PercyCommand {
    static description: string;
    static hidden: boolean;
    static strict: boolean;
    static examples: string[];
    static flags: {
        'allowed-hostname': flags.IOptionFlag<string[]>;
        'network-idle-timeout': import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        'cache-responses': import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        'port': import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        'config': flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<undefined>;
}
