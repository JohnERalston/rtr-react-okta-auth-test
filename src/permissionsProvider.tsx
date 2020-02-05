
export const permissions = {
    canViewOrder: 'canViewOrder',
    canEditShippingAddress: 'canEditShippingAddress',
    canEditBillingAddress: 'canEditBillingAddress',
    canIssuePromoCode: 'canIssuePromoCode',
    canRefund: 'canRefund'
}

const adminPermissions = Object.keys(permissions);

const standardPermissions = [
    permissions.canViewOrder,
    permissions.canEditShippingAddress,
    permissions.canEditBillingAddress
];

const groupPermissions: any = {
    admin: adminPermissions,
    standard: standardPermissions
}

export function getPermissions(groups: string[]): string[] {
    return groups.reduce((accum, group) => {
        accum = accum.concat(groupPermissions[group] || []);
        return accum;
    }, []);
}