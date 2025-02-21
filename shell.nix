{pkgs ? import <nixpkgs> {config = {allowUnfree = true;};}}:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.deno
  ];

  shellHook = ''
    echo "Nix shell with Node v18 is ready"
  '';
}
