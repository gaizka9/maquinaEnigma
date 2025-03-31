from selenium import webdriver # type: ignore
from selenium.webdriver.common.by import By # type: ignore
from selenium.webdriver.chrome.service import Service # type: ignore
from webdriver_manager.chrome import ChromeDriverManager  # Importar desde webdriver-manager # type: ignore
from selenium.webdriver.support.ui import Select  # Importar Select
import pandas as pd

def select(rotor, x):
    rotor = driver.find_element(By.ID, rotor)
    r = Select(rotor)
    r.select_by_value(x)

def intercambio(a, b):
    boton = driver.find_element(By.ID, "key"+a)
    boton.click()

    boton = driver.find_element(By.ID, "key"+b)
    boton.click()


texto = input("Insertar texto:\n")

claves = 'claves.csv'
df = pd.read_csv(claves, sep=';', encoding='latin1')

index =  int(input(f"Elige una clave del 1 al {df.shape[0]}: ")) -1 # El número de filas es el primer valor de la tupla

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("http://127.0.0.1:5500/index.html")
driver.refresh()


fila = df.iloc[index]

rotor = fila['rotor'].split('-')
posicion = fila['posicion'].split('-')
teclas = fila['teclas'].split('-')

select("rotor1", rotor[0])
select("rotor2", rotor[1])
select("rotor3", rotor[2])

select("rPos1", posicion[0])
select("rPos2", posicion[1])
select("rPos3", posicion[2])

intercambio("2", teclas[0])
intercambio("5", teclas[1])
intercambio("6", teclas[2])
intercambio("9", teclas[3])
intercambio("Q", teclas[4])
intercambio("R", teclas[5])
intercambio("T", teclas[6])
intercambio("O", teclas[7])
intercambio("P", teclas[8])
intercambio("S", teclas[9])
intercambio("D", teclas[10])
intercambio("F", teclas[11])
intercambio("G", teclas[12])
intercambio("J", teclas[13])
intercambio("K", teclas[14])
intercambio("Ñ", teclas[15])
intercambio("Z", teclas[16])
intercambio("X", teclas[17])
intercambio("B", teclas[18])
intercambio("N", teclas[19])

emisor = driver.find_element(By.ID, "emisor")
emisor.clear()  # Limpiar cualquier texto existente
emisor.send_keys(texto)

enviar = driver.find_element(By.ID, "enviar")
enviar.click()

receptor = driver.find_element(By.ID, "receptor")
contenido = receptor.get_attribute("value")

print(f"Salida: \n{contenido}")