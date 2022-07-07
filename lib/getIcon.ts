import * as Icon from '@heroicons/react/outline';

export const getIcon = (icon: string): React.ElementType<object> => {
    return Icon[icon as keyof typeof Icon];
}