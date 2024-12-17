export class objectHelper {

    // Returns the target with the assigned values ​​from the source if they match
    static mapMatchingProperties<T extends object, U extends object>(target: T, source: U): T {
        const keys = Object.keys(target);
        keys.forEach((key) => {
            if (key in source) {
                (target as any)[key] = (source as any)[key];
            }
        });
        return target;
    }
}