import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      {/* / 아래로는 public 파일을 가르킨다. */}
      <br></br><img src="/hello.png"></img>
    </>
  )
}
