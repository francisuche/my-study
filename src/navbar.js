

export default function Nav({dropzone: DropZone}){
    return (
        <>
        <div id="mySidenav" class="sidenav">
            <div>
                Media
            </div>
            <div>
                <DropZone />
            </div>

            <button> Add</button>
            <button> Cancel </button>
        </div>
        </>
    )
}