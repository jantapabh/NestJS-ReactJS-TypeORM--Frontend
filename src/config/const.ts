//สำหรับเก็บค่าคงที่ทุกอย่าง

export const baseUrl : string = ( process.env.NODE_ENV === 'development' ) ? 'http://localhost:3001' : 'http://localhost:3000'
