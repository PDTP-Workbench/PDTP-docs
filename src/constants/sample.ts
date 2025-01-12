export const clientSample = `import { PdtpRenderer } from "@pdtp/react";

const App = () => {
  return (
    <div>
      <h1>PDTP Example</h1>
      <PdtpRenderer
        file="http://localhost:8080/pdf-protocol?file=example.pdf"
        base={1}
        start={1}
        end={10}
      />
    </div>
  );
};

export default App;
`;

export const goServerSample = `package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/pdtp-workbench/pdtp-go"
)

func CORSMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Pdtp")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	http.HandleFunc("/pdf-protocol", pdtp.NewPDFProtocolHandler(
		pdtp.Config{
			ParsePathName: func(fileName string) (string, error) {
				return fileName, nil
			},
			CompressionMethod: pdtp.GzipCompression{},
		},
	))
	corsHandler := CORSMiddleware(http.DefaultServeMux)

	fmt.Println("PDF Protocol Server listening on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", corsHandler))
}

`;
