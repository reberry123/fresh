import dynamic from "next/dynamic"

const TUIEditor = dynamic(() => import('../components/TUIEditor'),
    {ssr: false}
)

export default function Write() {
    return (
        <div>
            <TUIEditor/>
            {/* <div className={styles.editor_form}>
                <form action="/api/post/new" method="POST">
                    
                    <input className={styles.title_form} name="title" placeholder="제목을 입력해 주세요."></input>
                    <div className={styles.editor}>
                        <div className={styles.toolbar}>
                            <button className={styles.style_button} type="button"><b>B</b></button>
                            <button className={styles.style_button} type="button"><i>I</i></button>
                            <button className={styles.style_button} type="button"><s>S</s></button>
                            <button className={styles.style_button} type="button"><u>U</u></button>
                        </div>
                        <div className={styles.content}>
                            <textarea name="content" placeholder="임시 에디터(추후 수정)">

                            </textarea>
                        </div>
                    </div>
                    
                    <button className={styles.submit} type="submit">등록</button>
                    <button className={styles.temp_submit} type="button">임시등록</button>
                </form>
            </div> */}
        </div>
    )
}