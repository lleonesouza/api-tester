import React from "react";

export default function requirements() {
  switch ("os.type()") {
    case "windows":
      return (
        <div>
          <h1>System Requirements</h1>
          <ul>
            <li>
              Windows 10 64-bit: Pro, Enterprise, or Education (Build 15063 or
              later).
            </li>
            <li>Hyper-V and Containers Windows features must be enabled.</li>
            <li>
              The following hardware prerequisites are required to successfully
              run Client Hyper-V on Windows 10:
              <ul>
                <li>
                  64 bit processor with{" "}
                  <a url="http://en.wikipedia.org/wiki/Second_Level_Address_Translation">
                    Second Level Address Translation (SLAT)
                  </a>
                </li>

                <li>4GB system RAM</li>

                <li>
                  BIOS-level hardware virtualization support must be enabled in
                  the BIOS settings. For more information, see{" "}
                  <a url="https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization-must-be-enabled">
                    Virtualization
                  </a>{" "}
                  .
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    default:
      break;
  }
}
