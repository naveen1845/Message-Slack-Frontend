import { cva } from 'class-variance-authority';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const sideBarItemVariants = cva(
    'flex items-center justify-start gap-1.5 font-normal h-7 px-[20px] text-sm overflow-hidden',
    {
        variants: {
            variant: {
                default: 'text-slate-100',
                active: 'text-black bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: {
            variant : 'default'
        }
    }
);

export const SidebarItem = ({
    icon: Icon,
    label,
    id,
    variant
}) => {

    const { workspaceId } = useParams();
    return (
        <div>
            <Button
                variant='oultine'
                className={sideBarItemVariants({variant})}
            >
                <Link
                    className="flex justify-center items-center gap-2 font-mono"
                    to={`/workspaces/${workspaceId}/channels/${id}`}
                >
                    <Icon />
                    <span>{label}</span>
                </Link>

            </Button>
        </div>
    );
};