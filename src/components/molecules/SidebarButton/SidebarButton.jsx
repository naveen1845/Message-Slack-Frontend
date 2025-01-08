import { Button } from "@/components/ui/button"

export const SidebarButton = ({ label, Icon }) => {
    return (
        <div className="flex flex-col text-white hover:cursor-pointer justify-center items-center">
            <Button className="hover:scale-110 transition-all bg-black hover:bg-black">
                <Icon/>
            </Button>
            <span className="text-xs">
                {label}
            </span>
        </div>
    )
}